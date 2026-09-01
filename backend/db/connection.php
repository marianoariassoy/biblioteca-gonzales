<?php

$dsn = 'mysql:dbname=c1652159_biblio;host=localhost';
$user = 'c1652159_biblio';
$password = 'sudotuZE84';

try {
  $pdo = new PDO(
    $dsn,
    $user,
    $password
  );
} catch (PDOException $e) {
  echo 'Error al conectarnos: ' . $e->getMessage();
}