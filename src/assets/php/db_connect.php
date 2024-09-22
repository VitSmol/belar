<?php
  // header("Access-Control-Allow-Origin: *");
  // header("Access-Control-Allow-Credentials: true");
  // header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  // header("Access-Control-Allow-Methods: PUT, POST, DELETE, GET");

  // $db_host = 'localhost';
  // $db_username = 'user13064_svy';
  // $db_password = '2897Ix-3`';
  // $db_name = 'user13064_guzo';
  // $mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);

  // if ($mysqli->connect_error) {
  //   die('Error: (' . $mysqli->connect_errno . ')' . $mysqli->connect_error);
  // }

  class Operations {
    private $db_host = 'localhost';
    private $db_name = 'belarpro_new';
    private $db_username = 'belarpro_admin';
    private $db_password = '2897Ix-3`';
    // private $mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);
    public function dbConnection() {
      try {
        $conn = new PDO('mysql:host=' . $this->db_host . ';dbname=' . $this->db_name .';charset=utf8'. $this->db_username, $this->db_password);
        // $conn->
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
      } catch (PDOException $e) {
        echo "Connection error " . $e->getMessage();
        exit;
      }
    }
  }
?>
