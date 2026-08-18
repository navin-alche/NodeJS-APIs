// Import Express.
const express = require("express");

// Create an Express router.
const router = express.Router();

// Import the student controller.
const studentController = require("../controllers/studentController");

// GET /api/students
// Get all students.
router.get("/students", studentController.getAllStudents);

// GET /api/students/1
// Get one student using their ID.
router.get("/students/:id", studentController.getStudentById);

// POST /api/students
// Create a new student.
router.post("/students", studentController.createStudent);

// PUT /api/students/1
// Update an existing student.
router.put("/students/:id", studentController.updateStudent);

// DELETE /api/students/1
// Delete a student.
router.delete("/students/:id", studentController.deleteStudent);

// Export the router.
// app.js will use this router.
module.exports = router;
