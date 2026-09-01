<?php

$userfile = $_FILES[$data]['tmp_name'];

$file_name = basename($userfile);
$path = dirname($userfile) . "/";

$file = $_FILES[$data]['name'];
$ext = substr($file, -3);

if (strtolower($ext) == "jpg") $img = @imagecreatefromjpeg($path . $file_name);
else if (strtolower($ext) == "gif") $img = @imagecreatefromgif($path . $file_name);
else if (strtolower($ext) == "png") $img = @imagecreatefrompng($path . $file_name);
else if (strtolower($ext) == "peg") $img = @imagecreatefromjpeg($path . $file_name);

list($original_width, $original_height) = getimagesize($path . $file_name);

$ratio = ($original_width / $width);
$height = round($original_height / $ratio);
$thumb = imagecreatetruecolor($width, $height);
imagecopyresampled($thumb, $img, 0, 0, 0, 0, $width, $height, $original_width, $original_height);

$final_path = "./images/" . $image;
imagejpeg($thumb, $final_path, 100);
