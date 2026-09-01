<?php

$meses = array("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

function debug($value)
{
  echo "<pre>";
  echo var_dump($value);
  echo "<pre>";
}

function sanitize($string)
{
  return filter_var($string, FILTER_SANITIZE_SPECIAL_CHARS);
}

function GenerateString($length)
{
  $psswd = substr(md5(microtime()), 1, $length);
  return $psswd;
}


function get_date($date)
{
  return date('d-m', $date);
}

function get_date_complete($date)
{
  $dias = array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
  $meses = array("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
  $date = getdate($date);
  $day = $date['wday'];
  $day_name = $dias[$day];
  $day_num = $date['mday'];
  $month = $date['mon'];
  $month_name = $meses[$month];
  $year = $date['year'];

  return $day_name . " " . $day_num . " de " . $month_name . " " . $year;
}

function cut_string($cadena, $limite)
{

  if (strlen($cadena) == 0) {
    $cadena = "---";
    return $cadena;
  } else {

    if (strlen($cadena) >= $limite) {

      $cadena = substr_replace($cadena, '...', $limite);
      return $cadena;
    } else return $cadena;
  }
}
