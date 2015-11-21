<?php

session_start();
require_once("phpFlickr.php");

$app_key = "5fe448d8d145c8489801465a6fd30d82";
$secret = "482a76d0c7ddb028";
$prems = "write";


$redirect = $_SERVER['REQUEST_URI'];

$f = new phpFlickr($app_key,$secret,true);

$f->auth("write");

$_SESSION["frob"] = $f->auth_getFrob();

$redirect = str_replace("auth.php","upload.php",$redirect);

header("Location: http://localhost:90".$redirect);
?>