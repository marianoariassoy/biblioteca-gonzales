<?php

require_once('./utilities/session.php');
require_once('./utilities/functions.php');
require_once('./db/connection.php');

$file_main = "horacio";
$table = "items";
$sec = 66;

$title_sec = "Horacio Gonzáles";
require("includes/head.php");

?>

<body class="bg-dark">
  <main>
    <?php
    require("includes/header.php");
    ?>


    <section class="p-3 p-lg-5 p-md-4 text-white">
      <div class="row mb-4">
        <div class="col-12">
          <h2> <strong><?php echo $title_sec ?></strong> </h2>
        </div>
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr class="text-secondary">
            <th scope="col">Sección</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td valign="middle" class="text-primary">
              <a href="bio10pasos">Biografía en 10 pasos</a>
            </td>
            <td valign="middle" align="right">
              <a href="bio10pasos" class="circle bg-transparent"><i class="bi bi-file-earmark-text"></i></a>
            </td>
          </tr>
          <tr>
            <td valign="middle" class="text-primary">
              <a href="sobreHG">Sobre HG</a>
            </td>
            <td valign="middle" align="right">
              <a href="sobreHG" class="circle bg-transparent"><i class="bi bi-file-earmark-text"></i></a>
            </td>
          </tr>
          <tr>
            <td valign="middle" class="text-primary">
              <a href="que-dice-hg">Que dice HG</a>
            </td>
            <td valign="middle" align="right">
              <a href="que-dice-hg" class="circle bg-transparent"><i class="bi bi-file-earmark-text"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <?php
    require("includes/footer.php");
    ?>
  </main>

  <script src="./utilities/wysihtml5/parser_rules/advanced.js"></script>
  <script src="./utilities/wysihtml5/dist/wysihtml5-0.3.0.min.js"></script>

</body>

</html>