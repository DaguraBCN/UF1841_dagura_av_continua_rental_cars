<?php
include 'db.php'; // Archivo que conecta a la base de datos

$nombre = $_POST['nombre-cliente'];
$apellidos = $_POST['apellido-cliente'];
$dni = $_POST['dni-conductor'];
$carnet = $_POST['carnet-conducir'];
$usuario = $_POST['usuario-cliente'];
$password = $_POST['password-cliente'];

$sql = "INSERT INTO usuarios (nombre, apellidos, dni, carnet, usuario, password) 
        VALUES ('$nombre', '$apellidos', '$dni', '$carnet', '$usuario', '$password')";

if ($conn->query($sql) === TRUE) {
  echo "Registro exitoso. Ahora puede iniciar sesión.";
} else {
  echo "Error en el registro: " . $conn->error;
}
?>
