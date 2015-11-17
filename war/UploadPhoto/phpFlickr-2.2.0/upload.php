<?php
session_start();
require_once("phpFlickr.php");


$api_key                 = "5fe448d8d145c8489801465a6fd30d82";
$api_secret              = "482a76d0c7ddb028";
$default_redirect        = "/";
$permissions             = "write";
$path_to_phpFlickr_class = "./";

//$f = new phpFlickr($api_key, $api_secret);

$frob = $_GET["frob"];

$f = new phpFlickr($api_key, $api_secret);

$token = $f -> auth_getToken($frob);

$myfile = "20140608_185858.jpg";

$ticket_id = $f -> async_upload($myfile);

?>