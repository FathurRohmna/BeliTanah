-- Create the users table
CREATE TABLE users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert a sample user (password should be hashed in real scenarios)
INSERT INTO users (email, password) VALUES ('name@gmail.com', 'password123');
