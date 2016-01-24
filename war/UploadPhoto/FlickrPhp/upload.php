<?php
require_once("phpFlickr.php");

if (is_null(session_id())) {
        session_start();
    }

header('Access-Control-Allow-Origin: http://localhost:8888');
header('Access-Control-Allow-Methods: GET, POST,OPTIONS');
header('Content-Type : application/x-www-form-urlencoded; charset=UTF-8');
header('Access-Control-Allow-Headers: X-Custom-Header');

class UploadPhoto {
	var $api_key;
	var $secret;
	var $f;

	function UploadPhoto($api_key,$secret){
		$this->api_key = $api_key;
		$this->secret = $secret;
		$this->f = new phpFlickr($this->api_key, $this->secret);
	}

	function uploadImage($frob,$file){

		$token = $this->f -> auth_getToken($frob);

		$filename = $file['name'];
	  	$destination = $filename;
	  	move_uploaded_file($file['tmp_name'], $destination );

		$ticket_id = $this->f-> async_upload($filename);
		return $ticket_id;
	}

	function getUrlByTicketId($ticket_id){
		$status = 0;

		while($status != '1'){

			$ticketContext = $this->f -> photos_upload_checkTickets($ticket_id);

			if(!empty($ticketContext)){
				$status = $ticketContext['0']['complete'];
			}
		}

		if(!empty($ticketContext)){
			$photoid = $ticketContext['0']['photoid'];

			$photoContext = $this->f -> photos_getContext($photoid);

			$farm = $photoContext['prevphoto']['farm'];
			$thumb = $photoContext['prevphoto']['thumb'];

			$location = str_replace('_s','_n',$thumb);

			echo $location;
		}
	}
}
?>