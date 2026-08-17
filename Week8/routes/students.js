const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/students:
 *   get:
 *     tags:
 *       - Students
 *     summary: Retrieve list of students
 *     responses:
 *       200:
 *         description: A list of students is returned
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Navin
 *                   course:
 *                     type: string
 *                     example: Software Engineering
 */
router.get("/api/students", (req, res) => {

    const students = [
        {
            id: 1,
            name: "Kimunila",
            course: "Software Engineering"
        },
        {
            id: 2,
            name: "Hanif",
            course: "Computer Science"
        },
        {
            id: 3,
            name: "Sherif",
            course: "Cyber Security"
        }
    ];

    res.json(students);
});

// Export the router
//
// This allows app.js to import it using:
//
// const studentRoutes = require('./routes/students');

module.exports = router;