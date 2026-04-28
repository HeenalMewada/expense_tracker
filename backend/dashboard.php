<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "./config/db.php";

$sql = "SELECT * FROM transactions";
$result = mysqli_query($conn, $sql);

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);
?>