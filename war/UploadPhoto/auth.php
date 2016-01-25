<?php

    ob_start();
    require_once("phpFlickr.php");
    session_start();

    $api_key                 = "5fe448d8d145c8489801465a6fd30d82";
    $api_secret              = "482a76d0c7ddb028";
    $default_redirect        = "/";
    $permissions             = "write";
    $path_to_phpFlickr_class = "./";

    unset($_SESSION['phpFlickr_auth_token']);
     
	if (!empty($_GET['extra'])) {
		$redirect = $_GET['extra'];
	}else{
		$redirect = str_replace("auth.php","upload.php",$_SERVER['REQUEST_URI']);
	}
    
    $f = new phpFlickr($api_key, $api_secret);
 
    $f-> auth($permissions, false);


    $_SESSION['php_flickr'] = serialize($f);
    
?>