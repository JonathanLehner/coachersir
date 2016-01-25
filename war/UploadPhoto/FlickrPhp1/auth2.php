<?php

    /*ob_start();*/
    require_once("phpFlickr.php");
    require_once("upload.php");

  /*  if (session_id() == "") {
        session_start();
    }*/

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST,OPTIONS');
header('Access-Control-Allow-Headers: X-Custom-Header');
$frob;
if(!empty($_GET["frob"])){
    $frob = $_GET["frob"];
}
$api_key                 = "5fe448d8d145c8489801465a6fd30d82";
$api_secret              = "482a76d0c7ddb028";
$default_redirect        = "/";
$permissions             = "write";
$path_to_phpFlickr_class = "./";

unset($_SESSION['phpFlickr_auth_token']);

if(is_null($frob)){
         
    $f = new phpFlickr($api_key, $api_secret);
 
    $a = $f-> auth($permissions, false);

    $_SESSION['php_flickr'] = serialize($f);

    /*$_SESSION['file'] = $_POST["file"];*/
 }else{
    $_COOKIE["fro1"]= $frob;
    setcookie("frob", $frob, time()+3600);
    setcookie("itay", "111", time()+3600);
    echo json_encode($frob);
 }
    /*$upload = new UploadPhoto($api_key,$api_secret);

    $ticket_id = $upload -> uploadImage($frob);

    $location = $upload -> getUrlByTicketId($ticket_id);*/
  /*  echo $frob;*/


    //}
    
?>