<?php
// Conexión a la base de datos
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $concesionario_id = $_POST['concesionario'];
    $colors = $_POST['color'];
    $matriculas = $_POST['matricula'];
    $precios = $_POST['precio-dia'];
    $incidencias = $_POST['incidencias'];
    $unidades = $_POST['unidades'];

    $marcas = $_POST['marca'];
    $modelos = $_POST['modelo'];
    $puertas = $_POST['puertas'];
    $plazas = $_POST['plazas'];
    $transmisiones = $_POST['transmision'];
    $tipos_vehiculo = $_POST['tipo-vehiculo'];

    // Procesar cada vehículo
    for ($i = 0; $i < count($colors); $i++) {
        $sql = "INSERT INTO vehiculos (concesionario_id, color, matricula, precio_dia, incidencias, unidades, marca, modelo, puertas, plazas, transmision, tipo_vehiculo) 
                VALUES ('$concesionario_id', '{$colors[$i]}', '{$matriculas[$i]}', '{$precios[$i]}', '{$incidencias[$i]}', '{$unidades[$i]}',
                        '{$marcas[$i]}', '{$modelos[$i]}', '{$puertas[$i]}', '{$plazas[$i]}', '{$transmisiones[$i]}', '{$tipos_vehiculo[$i]}')";

        if (!mysqli_query($conn, $sql)) {
            echo "Error al añadir vehículo: " . mysqli_error($conn);
        }
    }

    // Cerrar conexión
    mysqli_close($conn);

    echo "Vehículos añadidos exitosamente.";
}
?>
