// Import our database connection.
const db = require("../config/database");

// Create an object called Student.
// This object will contain our database functions.
const Student = {

    // Function used to get all students.
    getAllStudents: (callback) => {
        // Create the SQL query.
        const sql = "SELECT * FROM students";

        // Send the SQL query to MySQL.
        db.query(sql, callback);
    },

    // Function used to get one student using an ID.
    getStudentById: (id, callback) => {
        // Create the SQL query.
        // The ? will be replaced by the ID.
        const sql = "SELECT * FROM students WHERE id = ?";

        // Execute the query.
        // [id] replaces the ? inside the SQL query.
        db.query(sql, [id], callback);
    },

    // Function used to add a new student.
    createStudent: (student, callback) => {
        // Create the SQL INSERT query.
        const sql = "INSERT INTO students (name, email) VALUES (?, ?)";

        // Execute the query.
        // student.name replaces the first ?.
        // student.email replaces the second ?.
        db.query(sql, [student.name, student.email], callback);
    },

    // Function used to update a student.
    updateStudent: (id, student, callback) => {
        // Create the SQL UPDATE query.
        const sql = "UPDATE students SET name = ?, email = ? WHERE id = ?";

        // Execute the SQL query.
        db.query(sql, [student.name, student.email, id], callback);
    },

    // Function used to delete a student.
    deleteStudent: (id, callback) => {
        // Create the SQL DELETE query.
        const sql = "DELETE FROM students WHERE id = ?";

        // Execute the query.
        db.query(sql, [id], callback);
    }
};

// Export the Student object.
// The controller will use these functions.
module.exports = Student;
