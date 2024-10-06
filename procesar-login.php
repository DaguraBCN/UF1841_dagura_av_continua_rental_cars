<?php
session_start();
include 'db.php'; // Archivo que conecta a la base de datos

$usuario = $_POST['login-usuario'];
$password = $_POST['login-password'];

$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $_SESSION['usuario'] = $usuario;
  header("Location: alquiler.php"); // Redirige al formulario de alquiler
} else {
  echo "Credenciales incorrectas.";
}
?>
