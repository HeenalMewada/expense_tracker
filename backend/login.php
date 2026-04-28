<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
include "./config/db.php";

$data = json_decode(file_get_contents("php://input"));

$l_email = $data->l_email ?? '';;
$l_password = $data->l_password ?? '';


$query = "SELECT * FROM users where email='$l_email'";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_assoc($result);


if($row["password"] == $l_password){

echo json_encode([
            "status" => "success",
            "message" => "Login successful"
        ]);

} else {
    echo json_encode([
"status" => "error",
            "message" => "Wrong Password"
    ]);

} 
}
else {
    echo json_encode([
        "status" => "error",
            "message" => "User not found.."
    ]);
}
?>
