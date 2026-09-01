<?php

require_once('./db/connection.php');
require_once('./utilities/functions.php');

$error = false;
$end = "quienes-somos";

if ($_POST) {

  $user = isset($_POST['user']) ? $_POST['user'] : "";
  $password = isset($_POST['password']) ? $_POST['password'] : "";

  $sql = 'SELECT * FROM user';
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  $userDB = $results[0]['user'];
  $passwordDB = $results[0]['password'];

  if ($passwordDB === $password && $userDB === $user) {
    session_start();
    $error = false;
    $_SESSION['login'] = true;
    $_SESSION['client'] = $results[0]['client'];
    $_SESSION['url'] = $results[0]['url'];
    header("Location:$end");
    die();
  } else $error = true;
}

$sql = 'SELECT * FROM user';
$statement = $pdo->prepare($sql);
$statement->execute();
$results = $statement->fetch();
$client = $results['client'];

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo $client ?> Backend</title>
  <link rel="stylesheet" href="./css/bootstrap.css" />
  <link rel="stylesheet" href="./css/custom.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
</head>

<body>
  <main>
    <div class="container-fluid flex-center bg-dark bg-center login-main">
      <div class="w-20 text-secondary login-container ">
        <h1 class="mb-4 text-white"><strong>¡Hola!</strong></h1>
        <?php
        if ($error) echo '<div class="mt-3 mb-3 text-danger"><br> <strong>Los datos son incorrectos :-(</strong> <br> </div>';
        ?>
        <form method="POST">
          <div class="mb-2 text-left">
            <label for="user mb-4 ">Usuario</label>
            <input type="text" name="user" id="user" class="rounded-2 bg-secondary form-control mb-2" required />
            <label for="password mb-4">Contraseña</label>
            <input type="password" id="password" name="password" class="rounded-2  bg-secondary form-control mb-3" required />
          </div>
          <div>
            <button type="submit" class="rounded-2 btn btn-dark w-50 mb-5">Ingresar</button> <br>
            <?php echo $client ?> Backend 2024
          </div>
        </form>
      </div>
    </div>
  </main>
</body>

<script src="js/bootstrap.min.js"></script>

</html>