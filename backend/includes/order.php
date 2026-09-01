<form method="POST">
  <div class="row mb-4">
    <div class="col-md-2 mb-2 pe-md-2">
      <select class="form-select bg-transparent text-primary border-primary rounded-2" name="order" onChange="javascript:this.form.submit()">
        <?php
        foreach ($order_list as $indice => $value) {
          if ($order == $indice) $aux = "selected";
          else $aux = "";
          echo "<option value='$indice' $aux>$value</option> ";
        }
        ?>
      </select>
    </div>
    <div class="col-md-2 mb-2 pe-md-2 ">
      <select class="form-select bg-transparent text-primary border-primary rounded-2" name="order2" onChange="javascript:this.form.submit()">
        <?php
        $options2 = array('ASC' => 'Ascendente', 'DESC' => 'Descendiente');
        foreach ($options2 as $indice => $value) {
          if ($order2 == $indice) $aux = "selected";
          else $aux = "";
          echo "<option value='$indice' $aux>$value</option> ";
        }
        ?>
      </select>
    </div>
    <div class="col-md-2 mb-2 pe-md-2">
      <select class="form-select bg-transparent text-primary border-primary rounded-2" name="page" onChange="javascript:this.form.submit()">
        <?php
        for ($i = 1; $i <= $numpags; $i++) {
          if ($i == $page) $aux = "selected";
          else $aux = "";
          echo "<option $aux value='$i'>Página $i</option> ";
        }
        ?>
      </select>
    </div>
    <div class="col-md-2 mb-2 pe-md-2">
    </div>
    <div class="col-md-2 mb-2 pe-md-2">
    </div>
    <div class="col-md-2 mb-2 pe-md-2">
      <a href="?mod=1&add=1" class="rounded-2 btn btn-primary mybtn w-100">Agregar</a>
    </div>
  </div>
</form>