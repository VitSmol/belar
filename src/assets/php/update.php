<?php
error_reporting(E_ERROR);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Width");

$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'OPTIONS') {
  die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'PUT'):
  http_response_code(405);
  echo json_encode([
    'success' => 0,
    'message' => "Bad Request Detected! Only POST method is allowed",
  ]);
  exit;
endif;

require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));


if (!isset($data->id)) {
  echo json_encode([
    'success' => 0,
    'message' => 'Please enter correct ID'
  ]);
  exit;
}
// print_r($data);
// die();

try {
  $fetch_post = "SELECT * FROM `patients` WHERE id=:id";
  $fetch_smt = $conn->prepare($fetch_post);
  $fetch_smt->bindParam(':id', $data->id, PDO::PARAM_INT);
  $fetch_smt->execute();

  if ($fetch_smt->rowCount() > 0):
    $row = $fetch_smt->fetch(PDO::FETCH_ASSOC);

    $listnumber = isset($data->listnumber) ? $data->listnumber : $row['listnumber'];
    $name = isset($data->name) ? $data->name : $row['name'];
    $lastname = isset($data->lastname) ? $data->lastname : $row['lastname'];
    $fathername = isset($data->fathername) ? $data->fathername : $row['fathername'];
    $address = isset($data->address) ? $data->address : $row['address'];
    $sex = isset($data->sex) ? $data->sex : $row['sex'];
    $birthday = isset($data->birthday) ? $data->birthday : $row['birthday'];
    $date = isset($data->date) ? $data->date : $row['date'];
    $diag = isset($data->diag) ? $data->diag : $row['diag'];
    $side = isset($data->side) ? $data->side : $row['side'];
    $invalidgroup = isset($data->invalidgroup) ? $data->invalidgroup : $row['invalidgroup'];
    $isOperated = isset($data->isOperated) ? $data->isOperated : $row['isOperated'];
    $operdate = isset($data->operdate) ? $data->operdate : $row['operdate'];
    $info = isset($data->info) ? $data->info : $row['info'];
    $type = isset($data->type) ? $data->type : $row['type'];
    $org = isset($data->org) ? $data->org : $row['org'];
    $id = isset($data->id) ? $data->id : $row['id'];

    $update_query = "UPDATE `patients` SET 
      listnumber = :listnumber,
      name = :name,
      lastname = :lastname,
      fathername = :fathername,
      address = :address,
      sex = :sex,
      birthday = :birthday,
      date = :date,
      diag = :diag,
      side = :side,
      invalidgroup = :invalidgroup,
      isOperated = :isOperated,
      operdate = :operdate,
      info = :info,
      type = :type,
      org = :org
      WHERE id = :id";

    $update_stmt = $conn->prepare($update_query);

    $update_stmt->bindValue(':listnumber', htmlspecialchars((strip_tags($listnumber))), PDO::PARAM_STR);
    $update_stmt->bindValue(':name', htmlspecialchars((strip_tags($name))), PDO::PARAM_STR);
    $update_stmt->bindValue(':lastname', htmlspecialchars((strip_tags($lastname))), PDO::PARAM_STR);
    $update_stmt->bindValue(':fathername', htmlspecialchars((strip_tags($fathername))), PDO::PARAM_STR);
    $update_stmt->bindValue(':address', htmlspecialchars((strip_tags($address))), PDO::PARAM_STR);
    $update_stmt->bindValue(':sex', htmlspecialchars((strip_tags($sex))), PDO::PARAM_STR);
    $update_stmt->bindValue(':birthday', htmlspecialchars((strip_tags($birthday))), PDO::PARAM_STR);
    $update_stmt->bindValue(':date', htmlspecialchars((strip_tags($date))), PDO::PARAM_STR);
    $update_stmt->bindValue(':diag', htmlspecialchars((strip_tags($diag))), PDO::PARAM_STR);
    $update_stmt->bindValue(':side', htmlspecialchars((strip_tags($side))), PDO::PARAM_STR);
    $update_stmt->bindValue(':invalidgroup', htmlspecialchars((strip_tags($invalidgroup))), PDO::PARAM_STR);
    $update_stmt->bindValue(':isOperated', htmlspecialchars((strip_tags($isOperated))), PDO::PARAM_STR);
    $update_stmt->bindValue(':operdate', htmlspecialchars((strip_tags($operdate))), PDO::PARAM_STR);
    $update_stmt->bindValue(':info', htmlspecialchars((strip_tags($info))), PDO::PARAM_STR);
    $update_stmt->bindValue(':type', htmlspecialchars((strip_tags($type))), PDO::PARAM_STR);
    $update_stmt->bindValue(':org', htmlspecialchars((strip_tags($org))), PDO::PARAM_STR);
    $update_stmt->bindValue(':id', htmlspecialchars((strip_tags($id))), PDO::PARAM_STR);

    if ($update_stmt->execute()) {
      echo json_encode([
        'success' => 1,
        'message' => 'Successfully updated'
      ]);
      exit;
    }
    echo json_encode([
      'success' => 0,
      'message' => 'Failed to update'
    ]);
    exit;
  else:
    echo json_encode([
      'success' => 0,
      'message' => 'Invalid ID'
    ]);
    exit;
  endif;
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    'success' => 0,
    'message' => $e->getMessage()
  ]);
  exit;
}

?>