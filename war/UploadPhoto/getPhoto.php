<?php
session_start();
require_once("phpFlickr.php");


$api_key                 = "5fe448d8d145c8489801465a6fd30d82";
$api_secret              = "482a76d0c7ddb028";
$default_redirect        = "/";
$permissions             = "read";
$path_to_phpFlickr_class = "./";

//$f = new phpFlickr($api_key, $api_secret);

$f = new phpFlickr($api_key, $api_secret);
$status = 0;

while($status != '1'){

	$ticketContext = $f -> photos_upload_checkTickets('136631469-72157661197145691');

	$status = $ticketContext['0']['complete'];
}

//echo print_r($ticketContext);
$photoid = $ticketContext['0']['photoid'];

$photoContext = $f -> photos_getContext($photoid);

$farm = $photoContext['prevphoto']['farm'];
$thumb = $photoContext['prevphoto']['thumb'];

$photo_loaction = str_replace('_s','_n',$thumb);

echo $photo_loaction;
?>