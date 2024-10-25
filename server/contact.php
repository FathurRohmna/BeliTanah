Copy code
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
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect form data
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validate form data
    if (empty($email) || empty($subject) || empty($message)) {
        echo "Please fill out all the fields.";
        exit();
    }

    // Prepare and bind (using prepared statements for security)
    $stmt = $conn->prepare("INSERT INTO contact_us (email, subject, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $subject, $message);

    // Execute the query
    if ($stmt->execute()) {
        echo "Your message has been submitted successfully!";
    } else {
        echo "There was a problem submitting your message. Please try again.";
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>