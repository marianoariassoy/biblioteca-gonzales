<?php

$numero = (($page * $numreg) - $numreg) + 1;

$statement = $pdo->prepare($sql_pages);
$statement->execute();
$results = $statement->fetchAll();
$total = count($results);

$numpags = ceil($total / $numreg);
$limitinf = ($page - 1) * $numreg;

if ($numpags == 0) $numpags = 1;
