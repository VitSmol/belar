<?php
error_reporting(E_ERROR);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Width");

$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'OPTIONS') {
  die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST'):
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

if (!isset($data->login) || !isset($data->name) || !isset($data->password) || !isset($data->role)):
  echo json_encode([
    'success' => 0,
    'message' => 'Please enter required fields'
  ]);
  exit;

elseif ( empty(trim($data->login)) || empty(trim($data->name)) || empty(trim($data->password)) || empty(trim($data->role))):
  echo json_encode([
    'success' => 0,
    'message' => 'required fields cannot be empty'
  ]);
  exit;
endif;

try {
  $login = htmlspecialchars((trim($data->login)));
  $password = htmlspecialchars((trim($data->password)));
  $name = htmlspecialchars((trim($data->name)));
  $role = htmlspecialchars((trim($data->role)));
  // $address = htmlspecialchars((trim($data->address)));
  // $sex = htmlspecialchars((trim($data->sex))); //!
  // $birthday = htmlspecialchars((trim($data->birthday)));
  // $date = htmlspecialchars((trim($data->date)));
  // $diag = htmlspecialchars((trim($data->diag)));
  // $side = htmlspecialchars((trim($data->side))); //!
  // $invalidgroup = htmlspecialchars((trim($data->invalidgroup))); //!
  // $isOperated = htmlspecialchars((trim(0))); //!
  // $operdate = htmlspecialchars((trim($data->operdate)));
  // $info = htmlspecialchars((trim($data->info)));
  // $type = htmlspecialchars((trim($data->type)));
  // $org = htmlspecialchars((trim($data->org)));
  echo json_encode($login);

  $query = "INSERT INTO `employee` (name, role, password, login)
    VALUES (:name, :role, :password, :login)";

  $stmt = $conn->prepare($query);
  $stmt->bindValue(':name', $name, PDO::PARAM_STR);
  $stmt->bindValue(':role', $role, PDO::PARAM_STR);
  $stmt->bindValue(':password', $password, PDO::PARAM_STR);
  $stmt->bindValue(':login', $login, PDO::PARAM_STR);
  // $stmt->bindValue(':date', $date);
  // $stmt->bindValue(':address', $address, PDO::PARAM_STR);
  // $stmt->bindValue(':diag', $diag, PDO::PARAM_STR);
  // $stmt->bindValue(':operdate', $operdate);
  // $stmt->bindValue(':info', $info, PDO::PARAM_STR);
  // $stmt->bindValue(':type', $type, PDO::PARAM_STR);
  // $stmt->bindValue(':org', $org, PDO::PARAM_STR);
  // $stmt->bindValue(':birthday', $birthday, PDO::PARAM_STR);
  // $stmt->bindValue(':sex', $sex, PDO::PARAM_STR);
  // $stmt->bindValue(':side', $side, PDO::PARAM_STR);
  // $stmt->bindValue(':invalidgroup', $invalidgroup, PDO::PARAM_STR);
  // $stmt->bindValue(':isOperated', $isOperated, PDO::PARAM_STR);

  if ($stmt->execute()) {
    http_response_code(201);
    // echo "Wow";
    echo json_encode([
      'success' => 1,
      'message' => 'Data inserted successfully'
    ]);
    exit;
  } else {
    echo "Fail";
    echo json_encode([
      'success' => 0,
      'message' => 'There is some problem in data inserting'
    ]);
    exit;
  }

} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    'success' => 0,
    'message' => $e->getMessage()
  ]);
  exit;
}
?>
