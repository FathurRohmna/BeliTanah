<?php
session_start(); // Start a new session

// Database connection parameters
$servername = "localhost";
$username = "root";  // Your MySQL username
$password = "";      // Your MySQL password (leave blank if none)
$dbname = "belitanah";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare and bind (using prepared statements for security)
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Fetch the user data
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            // Set session variable for logged-in user
            $_SESSION['user_email'] = $email;

            // Redirect to a dashboard or protected page
            header("Location: dashboard.php");
            exit();
        } else {
            $error_message = "Password salah!";
        }
    } else {
        $error_message = "Email tidak ditemukan!";
    }

    $stmt->close();
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Login Gagal</title>
</head>
<body>
    <div class="w-full min-h-screen flex justify-center items-center">
        <div class="bg-white p-6 rounded shadow-lg">
            <h1 class="text-2xl font-bold mb-4">Login Error</h1>
            <?php if (isset($error_message)) : ?>
                <p class="text-red-600"><?= $error_message ?></p>
            <?php endif; ?>
            <a href="authentikasi.html" class="text-blue-600 underline">Coba lagi</a>
        </div>
    </div>
</body>
</html>