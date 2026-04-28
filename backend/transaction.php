<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
include "./config/db.php";

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo "No JSON received";
    exit;
}

$amount = $data->amount ?? "";
$type = $data->type ?? "";
$source = $data->source ?? null;
$category = $data->category ?? null;

// if ($amount === "" || $type === "") {
//     echo "Invalid input";
//     exit;
// }

$sql = "INSERT INTO transactions (amount, type, source, category)
VALUES ('$amount', '$type', '$source', '$category')";

if (mysqli_query($conn, $sql)) {
    echo "data entered successfully";
} else {
    echo "Error: " . mysqli_error($conn);
}  echo "Error";

?>