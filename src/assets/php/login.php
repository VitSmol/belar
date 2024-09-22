<?php
include_once("db_connect.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $password = mysqli_real_escape_string($mysqli, trim($request->password));

  $sql = "SELECT * FROM loginregister WHERE email='$email' AND password='$password'";
  $result = mysqli_query($mysqli, $sql);
  $nums = mysqli_num_rows($result);

  if ($nums > 0) {
    $data = array('message' => 'success', 'email' => $email);
    echo json_encode($data);
  } else {
    $data = array('message' => 'failed');
    echo json_encode($data);
  }
}
?>