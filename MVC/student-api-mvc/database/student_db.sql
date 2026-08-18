-- Create the database if it does not already exist.
CREATE DATABASE IF NOT EXISTS student_db;

-- Select the database.
USE student_db;

-- Remove the table if it already exists.
-- This makes the script easy to run again during demonstrations.
DROP TABLE IF EXISTS students;

-- Create the students table.
CREATE TABLE students (
    -- Automatically create a unique ID for every student.
    id INT AUTO_INCREMENT PRIMARY KEY,

    -- Store the student's name.
    name VARCHAR(100) NOT NULL,

    -- Store the student's email.
    email VARCHAR(100) NOT NULL
);

-- Add sample data.
INSERT INTO students (name, email)
VALUES ('John Smith', 'john@gmail.com');

-- Add another sample student.
INSERT INTO students (name, email)
VALUES ('Mary Jane', 'mary@gmail.com');
