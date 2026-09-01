<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$data = json_decode(file_get_contents('php://input'), true);

$to = $data['to'];
$from = $data['from'];
$from_name = $data['from_name'];
$subject = $data['subject'];
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$message = $data['message'];

$body = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\nMensaje: $message";

require_once("./includes/class.phpmailer.php");
require_once("./includes/class.smtp.php");

$smtpHost = "mail.thk-avalos.com";
$smtpUsuario = "no-reply@thk-avalos.com";
$smtpClave = "oQ]1(1EtY9m2pQ";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587;
$mail->IsHTML(true);
$mail->CharSet = "utf-8";
$mail->Host = $smtpHost;
$mail->Username = $smtpUsuario;
$mail->Password = $smtpClave;
$mail->From = $from;
$mail->FromName = $from_name;
$mail->AddAddress($to);
$mail->Subject = $subject;
$mensajeHtml = nl2br($body);
$mail->Body = "{$mensajeHtml}";
$mail->AltBody = "{$body} ";
$mail->SMTPOptions = array(
  'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
  )
);

$status = $mail->Send();
if ($status) {
  echo "success";
} else {
  echo "error";
}
