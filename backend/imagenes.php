<?php

require_once('./utilities/session.php');
require_once('./utilities/functions.php');
require_once('./db/connection.php');

$file_main = "imagenes";
$sec = 12;
$action = 'Modificar';
$title_sec = "Modificar imágenes";
$num_random = rand(1, 100);

if ($_POST) {

  $data = "userfile8";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut8.jpg");
    echo "8";
  }
  $data = "userfile7";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut7.jpg");
  }
  $data = "userfile6";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut6.jpg");
  }
  $data = "userfile5";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut5.jpg");
  }
  $data = "userfile4";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut4.jpg");
  }
  $data = "userfile3";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut3.jpg");
  }
  $data = "userfile2";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut2.jpg");
  }
  $data = "userfile1";
  if ($_FILES[$data]['name']) {
    copy($_FILES[$data]['tmp_name'], "./images-static/shortcut1.jpg");
  }

  header("Location:imagenes");
}

require("includes/head.php");

?>

<body class="bg-dark">
  <main>
    <?php require("includes/header.php");  ?>
    <section class="p-3 p-lg-5 p-md-4 text-white">
      <div class="row mb-4">
        <h2 class="mb-4"> <strong><?= $title_sec ?></strong> </h2>
      </div>
      <form method="POST" name="form" enctype="multipart/form-data">
        <div class="row mb-5">
          <div class="col col-12 col-md-6 pe-md-3 mb-3">
            <label class="form-label">Quienes Somos</label>
            <input name="userfile1" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut1.jpg?num=<?= $num_random ?>" target="_blank" class="opacity"><img src="./images-static/shortcut1.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>
          <div class="col col-12 col-md-6 mb-3">
            <label class="form-label">Archivos</label>
            <input name="userfile2" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut2.jpg" target="_blank" class="opacity"><img src="./images-static/shortcut2.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>

          <div class="col col-12 col-md-6 pe-md-3 mb-3">
            <label class="form-label">Montajes</label>
            <input name="userfile3" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut3.jpg" target="_blank" class="opacity"><img src="./images-static/shortcut3.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>
          <div class="col col-12 col-md-6 mb-3">
            <label class="form-label">¿Qué dice el gato?
            </label>
            <input name="userfile4" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut4.jpg" target="_blank" class="opacity"><img src="./images-static/shortcut4.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>

          <div class="col col-12 col-md-6 pe-md-3 mb-3">
            <label class="form-label">Horacio González
            </label>
            <input name="userfile5" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut5.jpg" target="_blank" class="opacity"><img src="./images-static/shortcut5.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>
          <div class="col col-12 col-md-6 mb-3">
            <label class="form-label">Actividades</label>
            <input name="userfile6" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut6.jpg" target="_blank" class="opacity"><img src="./images-static/shortcut6.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>

          <div class="col col-12 col-md-6 pe-md-3 mb-3">
            <label class="form-label">Amigxs</label>
            <input name="userfile7" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut7.jpg" target="_blank" class="opacity"><img src="./images-static/shortcut7.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>

          <div class="col col-12 col-md-6 pe-md-3 mb-3">
            <label class="form-label">Catálogo Biblioteca
            </label>
            <input name="userfile8" class="form-control bg-transparent text-white mb-2" type="file">
            <div class="row text-secondary">Subir imagen de 800 px de ancho.</div>
            <a href="./images-static/shortcut8.jpg" target="_blank" class="opacity"><img src="./images-static/shortcut8.jpg?num=<?= $num_random ?>" class="mt-3 img-circle-large mb-3" /></a>
          </div>
          <div class="row">
            <div class="col col-12">
              <button type="button" class="rounded-2 btn btn-primary mybtn" onClick="javascript:document.form.submit();"><?php echo $action ?></button>
              <button type="button" class="rounded-2 btn btn-secondary mybtn mx-2" onClick="javascript:history.back();">Cancelar</button>
            </div>
          </div>

          <input type="hidden" name="form" value="1">
      </form>
    </section>

    <?php require("includes/footer.php");  ?>

  </main>
</body>

</html>