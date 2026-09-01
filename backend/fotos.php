<?php

require_once('./utilities/session.php');
require_once('./utilities/functions.php');
require_once('./db/connection.php');

$file_main = "fotos";
$table = "items";
$sec = 9;

if (isset($_POST['form'])) {

  foreach ($_POST as $campo => $valor) {
    $cadena = "\$" . $campo . "='" . addslashes($valor) . "';";
    eval($cadena);
  }

  $data = "userfile1";
  if ($_FILES[$data]['name']) {
    $image = "gonzalez" . GenerateString(10) . ".jpg";
    $width = 1080;
    require_once("./utilities/create_image.php");
  } else $image = "";

  if ($action == 'Agregar') {

    $sql = 'INSERT INTO ' . $table . ' (`type`, `image`, `title`, `top`) 
    VALUES ("' . $sec . '", "' . $image . '", "' . $title . '", "' . $top . '")';
    $statement = $pdo->prepare($sql);
    $statement->execute();
    header("Location:$file_main");
  } else {

    $sql = 'UPDATE ' . $table . ' SET `top` = "' . $top . '"
    , `title` = "' . $title . '"    ';
    if ($_FILES['userfile1']['name']) $sql .= ", `image` = '$image' ";
    $sql .= " WHERE `id` = $id;";
    $statement = $pdo->prepare($sql);
    $statement->execute();
    header("Location:$file_main");
  }
}

if (isset($_GET['add'])) {
  $action = 'Agregar';
  $title_sec = "Agregar Fotos";
} else if (isset($_GET['edit'])) {
  $action = 'Modificar';
  $title_sec = "Modificar Fotos";
  $id_select = $_GET['i'];
  $sql = "SELECT * FROM $table WHERE id = $id_select ";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetch();
} else if (isset($_POST['delete'])) {
  $id_select = $_POST['id'];
  $archivo = $_POST['file'];
  $sql = "DELETE FROM $table WHERE id = $id_select";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  if ($archivo) {
    $dir = opendir("./images");
    unlink("./images/" . $archivo);
    closedir($dir);
  }
  header("Location:$file_main");
} else {

  $title_sec = "Fotos";
  $sql = "SELECT * FROM items WHERE items.type = $sec ORDER BY items.top DESC";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $total = $statement->rowCount();
  $results = $statement->fetchAll();
}

require("includes/head.php");

?>

<body class="bg-dark">
  <main>
    <?php
    require("includes/header.php");
    if (isset($_GET['mod'])) {
    ?>
      <section class="p-3 p-lg-5 p-md-4 text-white">
        <div class="row mb-5">
          <h2><strong><?php echo $title_sec ?></strong></h2>
        </div>
        <form method="POST" name="form" enctype="multipart/form-data">
          <div class="row mb-5">

            <div class="col col-12 mb-3">
              <label class="form-label">Título</label>
              <input type="text" name="title" class="form-control bg-transparent text-white mb-2" value="<?php if (isset($results['title'])) echo ($results['title']) ?>" />
            </div>
            <div class="col col-12 mb-3">
              <label class="form-label">Imagen </label>
              <input name="userfile1" class="form-control bg-transparent text-white mb-2" type="file">
              <div class="row text-secondary">Recomendado: 1080 px de ancho.</div>
              <?php if (isset($results['image'])) if ($results['image'])  echo '<a href="./images/' . $results['image'] . '" target="_blank" class="opacity"><img src="./images/' . $results['image'] . '" class="mt-3 img-circle-large mb-3" /></a>'; ?>
            </div>
            <div class="col col-12 mb-3">
              <label class="form-label">Top</label>
              <input type="number" name="top" class="form-control bg-transparent text-white mb-2" value="<?php if (isset($results['top'])) echo ($results['top']) ?>" />
              <div class="row text-secondary">Número de prioridad en los resultados.</div>
            </div>
          </div>

          <div class="row">
            <div class="col col-12">
              <button type="button" class="rounded-2 btn btn-primary mybtn" onClick="javascript:document.form.submit();"><?php echo $action ?></button>
              <button type="button" class="rounded-2 btn btn-secondary mybtn mx-2" onClick="javascript:history.back();">Cancelar</button>
            </div>
          </div>
          <input type="hidden" name="form" value="1">
          <input type="hidden" name="action" value="<?= $action ?>">
          <input type="hidden" name="id" value="<?= $id_select ?>">
        </form>
      </section>

    <?php } else { ?>

      <section class="p-3 p-lg-5 p-md-4 text-white">
        <div class="row mb-4">
          <div class="col-10 col-md-10 mb-2">
            <h2><strong><?php echo $title_sec ?></strong> (<?php echo $total ?>)</h2>
          </div>
          <div class="col-md-2 mb-2 pe-md-2">
            <a href="?mod=1&add=1" class="rounded-2 btn btn-primary mybtn w-100">Agregar</a>
          </div>
        </div>
        <?php
        if ($total) {
        ?>
          <table class="table table-dark table-hover">
            <thead>
              <tr class="text-secondary">
                <th scope="col">Imagen</th>
                <th scope="col">Título</th>
                <th scope="col">Top</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <?php
              foreach ($results as $row) {
                $id = $row['id'];
                $image = $row['image'];
                $title = $row['title'];
                $top = $row['top'];
              ?>
                <tr>
                  <td valign="middle">
                    <?php
                    if ($image) echo '<img src="./images/' . $image . '" class="img-circle-large" />';
                    ?>
                  </td>
                  <td valign="middle">
                    <?php echo $title ?>
                  </td>
                  <td valign="middle">
                    <?php echo $top ?>
                  </td>
                  <td valign="middle" align="right">
                    <a href="?mod=1&edit=1&i=<?php echo $id ?>" class="circle bg-transparent"><i class="bi bi-file-earmark-text"></i></a>
                    <a href="#" class="circle bg-transparent delete" data-id="<?php echo $id ?>" data-file="<?php echo $imagen ?>"><i class="bi bi-trash-fill"></i></a>
                  </td>
                </tr>
              <?php
              }
              ?>
            </tbody>
          </table>
        <?php } ?>
      </section>
    <?php
    }
    require_once("./includes/footer.php");
    ?>
  </main>
</body>

</html>