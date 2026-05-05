<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

include "./config/db.php";

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["error" => "No JSON received"]);
    exit;
}

// ✅ IMPORTANT: id lo
$id = $data->id ?? null;

$amount = $data->amount ?? "";
$type = $data->type ?? "";
$source = $data->source ?? null;
$category = $data->category ?? null;

if ($id) {
    // 🔥 UPDATE
    $sql = "UPDATE transactions 
            SET amount = ?, type = ?, source = ?, category = ?
            WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("dsssi", $amount, $type, $source, $category, $id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Updated successfully"]);
    } else {
        echo json_encode(["error" => "Update failed"]);
    }

} else {
    // 🔥 INSERT
    $sql = "INSERT INTO transactions (amount, type, source, category) 
            VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("dsss", $amount, $type, $source, $category);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Inserted successfully"]);
    } else {
        echo json_encode(["error" => "Insert failed"]);
    }
}
?>