<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

require 'conection.php';
require 'flight/Flight.php';

Flight::register('db', 'PDO', array($dsn, $user, $password));

Flight::route('/', function () {
  echo 'Biblioteca Gonzalez API';
});

require 'apis.php';

Flight::start();
