<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project_web";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//$img=$_POST['img_src'];
$name=$_POST['name'];
$price=$_POST['price'];
$sql="INSERT INTO `busket` (`name`, `price`) VALUES ($name, $price)";

if ($conn->query($sql) === TRUE) {
    echo "data inserted";
}
else
{
    echo "failed";
}

$conn->close();
?>
