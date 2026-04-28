<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
include "./config/db.php";

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

if (mysqli_query($conn, $sql)) {
    echo "User registered successfully";
} else {
    echo "Error";
}
?>