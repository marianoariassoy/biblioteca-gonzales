<?php

require_once('./utilities/session.php');
require_once('./utilities/functions.php');
require_once('./db/connection.php');


/**
 * Note: This file may contain artifacts of previous malicious infection.
 * However, the dangerous code has been removed, and the file is now safe to use.
 */


require("includes/head.php");


?>

<body class="bg-dark">
  <main>
    <?php
    require("includes/header.php");
    
    require("includes/footer.php");
    ?>
  </main>

  <script src="./utilities/wysihtml5/parser_rules/advanced.js"></script>
  <script src="./utilities/wysihtml5/dist/wysihtml5-0.3.0.min.js"></script>
  <script>
    var editor = new wysihtml5.Editor("wysihtml5-textarea", {
      toolbar: "wysihtml5-toolbar",
      parserRules: wysihtml5ParserRules
    });
  </script>

</body>

</html>