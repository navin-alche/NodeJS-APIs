// Import Express
const express = require("express");


// Create Express application
const app = express();


// Allow Express to read JSON data
app.use(express.json());


// Port used by the server
const PORT = 3000;


// Temporary student data
let students = [
    {
        id: 1,
        name: "Sarah",
        course: "Software Engineering"
    },
    {
        id: 2,
        name: "John",
        course: "Computer Science"
    },
    {
        id: 3,
        name: "Emma",
        course: "Cyber Security"
    }
];


// ---------------------------------------
// HOME ROUTE
// ---------------------------------------

app.get("/", (req, res) => {

    res.send("Welcome to the Student API!");

});


// ---------------------------------------
// GET ALL STUDENTS
// ---------------------------------------

app.get("/students", (req, res) => {

    res.json(students);

});


// ---------------------------------------
// GET ONE STUDENT
// ---------------------------------------

app.get("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }

    res.json(student);

});


// ---------------------------------------
// CREATE STUDENT
// ---------------------------------------

app.post("/students", (req, res) => {

    const { name, course } = req.body;


    if (!name || !course) {

        return res.status(400).json({
            message: "Name and course are required"
        });

    }


    const newStudent = {

        id: students.length + 1,

        name: name,

        course: course

    };


    students.push(newStudent);


    res.status(201).json(newStudent);

});


// ---------------------------------------
// UPDATE STUDENT
// ---------------------------------------

app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);


    const student = students.find(
        student => student.id === id
    );


    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }


    student.name = req.body.name;

    student.course = req.body.course;


    res.json(student);

});


// ---------------------------------------
// DELETE STUDENT
// ---------------------------------------

app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);


    const studentIndex = students.findIndex(
        student => student.id === id
    );


    if (studentIndex === -1) {

        return res.status(404).json({
            message: "Student not found"
        });

    }


    students.splice(studentIndex, 1);


    res.json({
        message: "Student deleted successfully"
    });

});


// ---------------------------------------
// START SERVER
// ---------------------------------------

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});