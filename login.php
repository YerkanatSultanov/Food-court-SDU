<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$email = $_POST['username'];
$password = $_POST['password'];

$sql = "select * from login_page where email like '$email' and password like '$password'";

$result = $conn->query($sql);

$count =mysqli_num_rows($result);

if($count > 0) {
   $row=mysqli_fetch_assoc($result);
   $row['message'] = 'Succeess!!';
   echo 'success';

}else {
    $row['message'] = 'Name or password is incorrect';

}
?>
