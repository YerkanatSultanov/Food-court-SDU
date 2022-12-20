<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project_web";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = array();
$select_sql = ('SELECT * FROM `busket`');

$result = mysqli_query($conn,$select_sql);

while($row = mysqli_fetch_row($result)) {
    $data[] = $row;
}
$json = json_encode($data);
echo $json;
$conn->close();
?>
