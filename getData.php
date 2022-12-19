<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project_web";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$query = "SELECT * FROM `busket`;";


$result = $conn->query($query);

if ($result->num_rows > 0)
{
    // OUTPUT DATA OF EACH ROW
    while($row = $result->fetch_assoc())
    {
        echo $row;
    }
}
else {
    echo "0 results";
}

$conn->close();
?>
