<?php
include_once("db_connect.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $f_name = trim($request->f_name);
  $l_name = trim($request->l_name);
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $password = mysqli_real_escape_string($mysqli, trim($request->password));
  $mobile = trim($request->mobile);
  $sql = "INSERT INTO loginregister(f_name, l_name, email, password, mobile) VALUES ('$f_name', '$l_name', '$email','$password', '$mobile')";

  if ($mysqli->query($sql)) {
    $data = array('message' => 'Success');
    echo json_encode($data);
  } else {
    $data = array('message' => 'failed');
    echo json_encode($data);
  }
}
?>