<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "./config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data['email'] ?? '');
$password = trim($data['password'] ?? '');

if (empty($email) || empty($password)) {

    echo json_encode([
        "status" => "error",
        "message" => "Email and password required"
    ]);

    exit();
}

// Check user
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    // Plain password check
    if ($password == $user['password']) {

        echo json_encode([
            "status" => "success",
            "message" => "Login successful"
        ]);

    } else {

        echo json_encode([
            "status" => "error",
            "message" => "Incorrect password"
        ]);
    }

} else {

    echo json_encode([
        "status" => "error",
        "message" => "User not found"
    ]);
}

?>