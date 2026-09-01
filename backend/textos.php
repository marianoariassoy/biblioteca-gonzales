<?php

require_once('./utilities/session.php');
require_once('./utilities/functions.php');
require_once('./db/connection.php');

$file_main = "textos";
$table = "items";
$sec = 50;

if (isset($_POST['form'])) {

  foreach ($_POST as $campo => $valor) {
    $cadena = "\$" . $campo . "='" . addslashes($valor) . "';";
    eval($cadena);
  }
  $sql = 'UPDATE ' . $table . ' SET  `text` = "' . $text . '" ';

  $sql .= " WHERE `id` = $id;";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  header("Location:$file_main");
}

if (isset($_GET['edit'])) {

  $action = 'Modificar';
  $title_sec = "Modificar Texto";
  $id_select = $_GET['i'];
  $sql = "SELECT * FROM $table WHERE id = $id_select ";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
} else {
  $order = "id";
  $order2 = "ASC";
  $page = 1;
  $numreg = 30;
  $title_sec = "Textos";

  if ($_POST) {
    $order = $_POST['order'];
    $order2 = $_POST['order2'];
    $page = $_POST['page'];
  }

  $where = "WHERE type = $sec";
  $sql_pages = "SELECT id FROM $table $where";
  require_once("./utilities/pagination.php");
  $sql = "SELECT * FROM $table $where ORDER BY $order $order2 LIMIT " . $limitinf . "," . $numreg . " ";
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  $order_list = array('title' => 'Título', 'id' => 'Alta');
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
              <label class="form-label">Sección</label>
              <input type="text" name="title" disabled class="form-control bg-transparent text-white mb-2" value="<?php if (isset($results[0]['title'])) echo ($results[0]['title']) ?>" />
            </div>
            <div class="col col-12 mb-3">
              <label class="form-label">Descripción</label>
              <div id="wysihtml5-toolbar" style="display: none;" class="mb-3">
                <a data-wysihtml5-command="bold">Bold</a> &bull;
                <a data-wysihtml5-command="italic">Italic</a>
              </div>
              <textarea name="text" id="wysihtml5-textarea" cols="30" rows="6" class="form-control bg-transparent text-white mb-2"><?php if (isset($results[0]['text'])) echo ($results[0]['text']) ?></textarea>
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
          <div class="col-12">
            <h2> <strong><?php echo $title_sec ?></strong> (<?php echo $total ?>)</h2>
          </div>
        </div>
        <?php

        if ($total) {
        ?>
          <table class="table table-dark table-hover">
            <thead>
              <tr class="text-secondary">
                <th scope="col">Sección</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <?php
              foreach ($results as $row) {
                $id = $row['id'];
                $title = $row['title'];
              ?>
                <tr>

                  <td valign="middle" class="text-primary">
                    <strong><?php echo $title; ?></strong>
                  </td>
                  <td valign="middle" align="right">
                    <a href="?mod=1&edit=1&i=<?php echo $id ?>" class="circle bg-transparent"><i class="bi bi-file-earmark-text"></i></a>
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