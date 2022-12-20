<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = new mysqli($servername, $username, $password, $dbname);

$the_username = $_POST['username'];
$the_password = $_POST['password'];

$query = "INSERT INTO `login_page` (email, password) VALUES ('$the_username', '$the_password')";

if (mysqli_query($conn, $query)) {
    echo "record Inserted Successfully";
} else {
    echo "Error:" . mysqli_error($conn);
}

mysqli_close($conn);
?>
