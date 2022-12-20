<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = new mysqli($servername, $username, $password, $dbname);

$the_email = $_POST['email'];
$the_password = $_POST['password'];

$query = "INSERT INTO `login_page` (email, password) VALUES ('$the_email', '$the_password')";

if (mysqli_query($conn, $query)) {
    echo "record Inserted Successfully";
} else {
    echo "Error:" . mysqli_error($conn);
}

mysqli_close($conn);
?>