<?php
session_start();
if (!isset($_SESSION['user_email'])) {
    // If not logged in, redirect to login page
    header("Location: authentikasi.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Dashboard</title>
</head>
<body>
    <div class="min-h-screen flex justify-center items-center">
        <div class="p-6 rounded-lg shadow-lg bg-white">
            <h1 class="text-3xl font-bold">Welcome, <?= $_SESSION['user_email'] ?></h1>
            <p class="text-gray-700">You are logged in!</p>
            <a href="logout.php" class="block mt-4 text-blue-600 underline">Logout</a>
        </div>
    </div>
</body>
</html>