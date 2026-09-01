<?php

require_once('./utilities/session.php');
require_once('./utilities/functions.php');
require_once('./db/connection.php');

$file_main = "actividades";
$table = "items";
$sec = 2;

if (isset($_POST['form'])) {

  foreach ($_POST as $campo => $valor) {
    $cadena = "\$" . $campo . "='" . addslashes($valor) . "';";
    eval($cadena);
  }

  $data = "userfile2";
  if ($_FILES[$data]['name']) {
    $file = "gonzalez" . GenerateString(10) . ".pdf";
    copy($_FILES[$data]['tmp_name'], "./images/" . $file);
  } else $file = "";

  $data = "userfile1";
  if ($_FILES[$data]['name']) {
    $image = "gonzalez" . GenerateString(10) . ".jpg";
    $width = 1280;
    require_once("./utilities/create_image.php");
  } else $image = "";

  if ($action == 'Agregar') {

    $sql = 'INSERT INTO ' . $table . ' 
		(`type`, `title`, `subtitle`, `text`, `image`, `url`, `top`, `file`, `video` ) 
		VALUES 
		("' . $sec  . '", "' . $title . '", "' . $subtitle . '", "' . $text . '", "' . $image . '"
    , "' . $url . '",  "' . $top . '", "' . $file . '",  "' . $video . '" )';
    $statement = $pdo->prepare($sql);
    $statement->execute();
    header("Location:$file_main");
  } else {
    $sql = 'UPDATE ' . $table . ' 
    SET 
    `title` = "' . $title  . '", `subtitle` = "' . $subtitle . '", `text` = "' . $text . '", `url` = "' . $url . '", `top` = "' . $top . '", `video` = "' . $video . '"';


    if ($delete_image == 1) $sql .= ", `image` = '' ";
    if ($delete_pdf == 1) $sql .= ", `file` = '' ";

    if ($_FILES['userfile1']['name']) $sql .= ", `image` = '$image' ";
    if ($_FILES['userfile2']['name']) $sql .= ", `file` = '$file' ";

    $sql .= " WHERE `id` = $id;";
    $statement = $pdo->prepare($sql);
    $statement->execute();
    header("Location:$file_main");
  }
}
if (isset($_GET['add'])) {

  $action = 'Agregar';
  $title_sec = "Agregar Actividad";
} else if (isset($_GET['edit'])) {

  $action = 'Modificar';
  $title_sec = "Modificar Actividad";
  $id_select = $_GET['i'];
  $sql = "SELECT * FROM $table WHERE id = $id_select";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetch();
} else if (isset($_POST['delete'])) {

  $id_select = $_POST['id'];
  $sql = "DELETE FROM $table WHERE id = $id_select";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  if ($_POST['file']) {
    $archivo = $_POST['file'];
    $dir = opendir("./images");
    unlink("./images/" . $archivo);
    closedir($dir);
  }
  header("Location:$file_main");
} else {
  $title_sec = "Listado de Actividades";
  $sql = "SELECT * FROM $table WHERE type = $sec ORDER BY top DESC";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  $total = count($results);
  $order_list = array('top' => 'Prioridad', 'title' => 'Título');
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
          <h2> <strong><?php echo $title_sec ?></strong> </h2>
        </div>
        <form method="POST" name="form" enctype="multipart/form-data">
          <div class="row mb-5">
            <div class="col col-12 mb-3">
              <label class="form-label">Título</label>
              <input type="text" name="title" class="form-control bg-transparent text-white mb-2" value="<?php if (isset($results['title'])) echo ($results['title']) ?>" />
            </div>
            <!-- <div class="col col-12 mb-3">
              <label class="form-label">Subtítulo</label>
              <input type="text" name="subtitle" class="form-control bg-transparent text-white mb-2" value="<?php if (isset($results['subtitle'])) echo ($results['subtitle']) ?>" />
            </div> -->
            <div class="col col-12 mb-3">
              <label class="form-label">Texto</label>
              <div id="wysihtml5-toolbar" style="display: none;" class="mb-3">
                <a data-wysihtml5-command="bold">Bold</a> &bull;
                <a data-wysihtml5-command="italic">Italic</a> &bull;
                <a data-wysihtml5-command="underline">Subrayado</a> &bull;
                <a data-wysihtml5-command="formatInline" data-wysihtml5-command-value="h2">Título 1</a> &bull;
                <a data-wysihtml5-command="formatInline" data-wysihtml5-command-value="h3">Título 2</a>
                <br>
                <a data-wysihtml5-command="insertUnorderedList">Agregar Lista</a>
                &bull;
                <a data-wysihtml5-command="createLink">Agregar Link</a>
                <div data-wysihtml5-dialog="createLink" class="mt-3" style="display: none;">
                  <label class="mr-3 inline">
                    <input data-wysihtml5-dialog-field="href" value="http://" class="text">
                  </label>
                  <a data-wysihtml5-dialog-action="save">Agregar</a> / <a data-wysihtml5-dialog-action="cancel">Cancelar</a>
                </div>
                &bull;
                <a data-wysihtml5-command="insertImage">Agregar imagen</a>
                <div data-wysihtml5-dialog="insertImage" class="mt-3" style="display: none;">
                  <label class="mr-3 inline">
                    <input data-wysihtml5-dialog-field="src" value="http://">
                  </label>
                  <a data-wysihtml5-dialog-action="save">Agregar</a> /
                  <a data-wysihtml5-dialog-action="cancel">Cancelar</a>
                </div>
              </div>

              <textarea name="text" cols="30" rows="12" id="wysihtml5-textarea" class="form-control bg-transparent text-white mb-2"><?php if (isset($results['text'])) echo ($results['text']) ?></textarea>
            </div>
            <div class="col col-12 col-md-6 pe-md-3 mb-3">
              <label class="form-label">Imagen</label>
              <input name="userfile1" class="form-control bg-transparent text-white mb-2" type="file">
              <div class="row text-secondary">Recomendado 1280 x 800 px de ancho y alto.</div>
              <?php
              if (isset($results['image'])) if ($results['image']) {
                echo '<a href="./images/' . $results['image'] . '" target="_blank" class="opacity"><img src="./images/' . $results['image'] . '" class="mt-3 img-circle-large mb-3" /></a>';
                echo '<input type="checkbox" name="delete_image" value="1" style="margin-right: .5rem;" class="form-check-input" id="delete_image">';
                echo '<label class="form-check-label" for="delete_image">Eliminar imagen</label>';
              }
              ?>
            </div>
            <div class="col col-12 col-md-6 mb-3">
              <label class="form-label">Link</label>
              <input type="text" name="url" class="form-control bg-transparent text-white mb-2" value="<?php if (isset($results['url'])) echo ($results['url']) ?>" />
              <div class="row text-secondary">URL completa, incluir https://</div>
            </div>
            <div class="col col-12 col-md-6 pe-md-3 mb-3">
              <label class="form-label">Video (Enlace)</label>
              <input type="text" name="video" class="form-control bg-transparent text-white mb-2" value="<?php if (isset($results['video'])) echo ($results['video']) ?>" />
            </div>
            <div class="col col-12 col-md-6 mb-3">
              <label class="form-label">PDF</label>
              <input name="userfile2" class="form-control bg-transparent text-white mb-2" type="file">
              <?php if (isset($results['file'])) if ($results['file']) {
                echo '<a href="./images/' . $results['file'] . '" target="_blank" class="opacity">Ver Archivo</a>';
                echo '<br/> <input type="checkbox" name="delete_pdf" value="1" style="margin-right: .5rem;" class="form-check-input" id="delete_pdf">';
                echo '<label class="form-check-label" for="delete_pdf">Eliminar Archivo</label>';
              }
              ?>
            </div>

            <div class="col col-12 col-md-6 pe-md-3 mb-3">
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
          <input type="hidden" name="action" value="<?php echo $action ?>">
          <input type="hidden" name="id" value="<?php echo $id_select ?>">
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
                <th scope="col">Título</th>
                <th scope="col">Imágenes</th>
                <th scope="col">Top</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td valign="middle" class="text-primary" colspan="3">
                  <strong>Video Presentación</strong>
                </td>
                <td valign="middle" align="right">
                  <a href="actividades-video.php" class="circle bg-transparent"><i class="bi bi-file-earmark-text"></i></a>
                </td>
              </tr>

              <?php
              foreach ($results as $row) {
                $id = $row['id'];
                $title = $row['title'];
                $top = $row['top'];

                $sql_images = "SELECT images.id FROM images WHERE images.item = $id";
                $statement = $pdo->prepare($sql_images);
                $statement->execute();
                $total_images = $statement->rowCount();
              ?>
                <tr>
                  <td valign="middle" class="text-primary">
                    <strong><?php echo $title; ?></strong>
                  </td>
                  <td valign="middle">
                    <a href="images.php?id_sec=<?php echo $id; ?>">Carrete (<?php echo $total_images; ?>)</a>
                  </td>
                  <td valign="middle">
                    <?php echo $top; ?>
                  </td>

                  <td valign="middle" align="right">
                    <a href="?mod=1&edit=1&i=<?php echo $id ?>" class="circle bg-transparent"><i class="bi bi-file-earmark-text"></i></a>
                    <a href="#" class="circle bg-transparent delete" data-id="<?php echo $id ?>"><i class="bi bi-trash-fill"></i></a>
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
    require("includes/footer.php");
    ?>
  </main>

  <script src="./utilities/wysihtml5/parser_rules/advanced.js"></script>
  <script src="./utilities/wysihtml5/dist/wysihtml5-0.3.0.min.js"></script>
  <script>
    var editor = new wysihtml5.Editor("wysihtml5-textarea", { // id of textarea element
      toolbar: "wysihtml5-toolbar", // id of toolbar element
      parserRules: wysihtml5ParserRules // defined in parser rules set 
    });
  </script>

</body>

</html>