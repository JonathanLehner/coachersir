<?php
/* phpFlickr Class 2.2.0
 * Written by Dan Coulter (dan@dancoulter.com)
 * Sourceforge Project Page: http://www.sourceforge.net/projects/phpflickr/
 * Released under GNU Lesser General Public License (http://www.gnu.org/copyleft/lgpl.html)
 * For more information about the class and upcoming tools and toys using it,
 * visit http://www.phpflickr.com/ or http://phpflickr.sourceforge.net
 *
 *	 For installation instructions, open the README.txt file packaged with this
 *	 class. If you don't have a copy, you can see it at:
 *	 http://www.phpflickr.com/README.txt
 *
 *	 Please submit all problems or questions to the Help Forum on my project page:
 *		 http://sourceforge.net/forum/forum.php?forum_id=469652
 *
 */
if (session_id() == "") {
	session_start();
}

// Decides which include path delimiter to use.  Windows should be using a semi-colon
// and everything else should be using a colon.  If this isn't working on your system,
// comment out this if statement and manually set the correct value into $path_delimiter.
if (strpos(__FILE__, ':') !== false) {
	$path_delimiter = ';';
} else {
	$path_delimiter = ':';
}

// This will add the packaged PEAR files into the include path for PHP, allowing you
// to use them transparently.  This will prefer officially installed PEAR files if you
// have them.  If you want to prefer the packaged files (there shouldn't be any reason
// to), swap the two elements around the $path_delimiter variable.  If you don't have
// the PEAR packages installed, you can leave this like it is and move on.

ini_set('include_path', ini_get('include_path') . $path_delimiter . dirname(__FILE__) . '/PEAR');

// If you have problems including the default PEAR install (like if your open_basedir
// setting doesn't allow you to include files outside of your web root), comment out
// the line above and uncomment the next line:

// ini_set('include_path', dirname(__FILE__) . '/PEAR' . $path_delimiter . ini_get('include_path'));

class flickr {
	var $api_key;
	var $secret;
	var $REST = 'https://api.flickr.com/services/rest/';
	var $Upload = 'https://api.flickr.com/services/upload/';
	var $Replace = 'https://api.flickr.com/services/replace/';
	var $req;
	var $response;
	var $parsed_response;
	var $cache = false;
	var $cache_db = null;
	var $cache_table = null;
	var $cache_dir = null;
	var $cache_expire = null;
	var $die_on_error;
	var $error_code;
	Var $error_msg;
	var $token;
	var $php_version;

	/*
	 * When your database cache table hits this many rows, a cleanup
	 * will occur to get rid of all of the old rows and cleanup the
	 * garbage in the table.  For most personal apps, 1000 rows should
	 * be more than enough.  If your site gets hit by a lot of traffic
	 * or you have a lot of disk space to spare, bump this number up.
	 * You should try to set it high enough that the cleanup only
	 * happens every once in a while, so this will depend on the growth
	 * of your table.
	 */
	var $max_cache_rows = 1000;

	function flickr ($api_key, $secret = NULL, $die_on_error = false)
	{
		//The API Key must be set before any calls can be made.  You can
		//get your own at http://www.flickr.com/services/api/misc.api_keys.html
		$this->api_key = $api_key;
		$this->secret = $secret;
		$this->die_on_error = $die_on_error;
		$this->service = "flickr";

		//Find the PHP version and store it for future reference
		$this->php_version = explode("-", phpversion());
		$this->php_version = explode(".", $this->php_version[0]);

		//All calls to the API are done via the POST method using the PEAR::HTTP_Request package.
		require_once 'HTTP/Request.php';
		$this->req =& new HTTP_Request();
		$this->req->setMethod(HTTP_REQUEST_METHOD_POST);
	}


	function getCached ($request)
	{
		//Checks the database or filesystem for a cached result to the request.
		//If there is no cache result, it returns a value of false. If it finds one,
		//it returns the unparsed XML.
		$reqhash = md5(serialize($request));
		if ($this->cache == 'db') {
			$result = $this->cache_db->getOne("SELECT response FROM " . $this->cache_table . " WHERE request = ? AND DATE_SUB(NOW(), INTERVAL " . (int) $this->cache_expire . " SECOND) < expiration", $reqhash);
			if (!empty($result)) {
				return $result;
			}
		} elseif ($this->cache == 'fs') {
			$file = $this->cache_dir . '/' . $reqhash . '.cache';
			if (file_exists($file)) {
				if ($this->php_version[0] > 4 || ($this->php_version[0] == 4 && $this->php_version[1] >= 3)) {
					return file_get_contents($file);
				} else {
					return implode('', file($file));
				}
			}
		}
		return false;
	}

	function cache ($request, $response)
	{
		//Caches the unparsed XML of a request.
		$reqhash = md5(serialize($request));
		if ($this->cache == 'db') {
			//$this->cache_db->query("DELETE FROM $this->cache_table WHERE request = '$reqhash'");
			if ($this->cache_db->getOne("SELECT COUNT(*) FROM {$this->cache_table} WHERE request = '$reqhash'")) {
				$sql = "UPDATE " . $this->cache_table . " SET response = ?, expiration = ? WHERE request = ?";
				$this->cache_db->query($sql, array($response, strftime("%Y-%m-%d %H:%M:%S"), $reqhash));
			} else {
				$sql = "INSERT INTO " . $this->cache_table . " (request, response, expiration) VALUES ('$reqhash', '" . str_replace("'", "''", $response) . "', '" . strftime("%Y-%m-%d %H:%M:%S") . "')";
				$this->cache_db->query($sql);
			}
		} elseif ($this->cache == "fs") {
			$file = $this->cache_dir . "/" . $reqhash . ".cache";
			$fstream = fopen($file, "w");
			$result = fwrite($fstream,$response);
			fclose($fstream);
			return $result;
		}
		return false;
	}

	function clean_text_nodes($arr) {
		if (!is_array($arr)) {
			return $arr;
		} elseif (count($arr) == 0) {
			return $arr;
		} elseif (count($arr) == 1 && array_key_exists('_content', $arr)) {
			return $arr['_content'];
		} else {
			foreach ($arr as $key => $element) {
				$arr[$key] = $this->clean_text_nodes($element);
			}
			return($arr);
		}
	}

	function request ($command, $args = array(), $nocache = false)
	{
		//Sends a request to Flickr's REST endpoint via POST.
		$this->req->setURL($this->REST);
		$this->req->clearPostData();
		if (substr($command,0,7) != "flickr.") {
			$command = "flickr." . $command;
		}

		//Process arguments, including method and login data.
		$args = array_merge(array("method" => $command, "format" => "php_serial", "api_key" => $this->api_key), $args);
		if (!empty($this->token)) {
			$args = array_merge($args, array("auth_token" => $this->token));
		} elseif (!empty($_SESSION['phpFlickr_auth_token'])) {
			$args = array_merge($args, array("auth_token" => $_SESSION['phpFlickr_auth_token']));
		}
		ksort($args);
		$auth_sig = "";
		if (!($this->response = $this->getCached($args)) || $nocache) {
			foreach ($args as $key => $data) {
				$auth_sig .= $key . $data;
				$this->req->addPostData($key, $data);
			}
			if (!empty($this->secret)) {
				$api_sig = md5($this->secret . $auth_sig);
				$this->req->addPostData("api_sig", $api_sig);
			}

			$this->req->addHeader("Connection", "Keep-Alive");
			
			echo json_decode($this->req);
			//Send Requests
			if ($this->req->sendRequest()) {
				$this->response = $this->req->getResponseBody();
				$this->cache($args, $this->response);
			} else {
				die("There has been a problem sending your command to the server.");
			}
		}
		/*
		 * Uncomment this line (and comment out the next one) if you're doing large queries
		 * and you're concerned about time.  This will, however, change the structure of
		 * the result, so be sure that you look at the results.
		 */
		//$this->parsed_response = unserialize($this->response);
		$this->parsed_response = $this->clean_text_nodes(unserialize($this->response));
		if ($this->parsed_response['stat'] == 'fail') {
			if ($this->die_on_error) die("The Flickr API returned the following error: #{$this->parsed_response['code']} - {$this->parsed_response['message']}");
			else {
				$this->error_code = $this->parsed_response['code'];
				$this->error_msg = $this->parsed_response['message'];
				$this->parsed_response = false;
			}
		} else {
			$this->error_code = false;
			$this->error_msg = false;
		}
		return $this->response;
	}
}


?>