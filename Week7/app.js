
//step 1 - simple node js
// console.log("Hello from node.js!")

//step 2 - initialise the node js project
// npm init -y
//package.json is now available -> contains name of project, version, main js file, script to automate something
//e.g "start":"node app.js" -> we can now use npm start

//step 3 - npm install express
// makes it easier to create apis
// now you will see that there are package-lock.json, node_modules
//node modules -> contains all nexessary libraries etc... do not modify this folder
//package-lock.json -> helps Node.js install the same package versions consistently.

//step 4: our first express server
// const express = require("express"); // We are importing Express and storing it in a variable
// const app = express(); //We create our Express application. / app will be used to create routes such as app.get(), app.post(), etc..
// const PORT = 3000; // we are just telling our server to run on port 3000

// app.listen(PORT, () => { //This starts the server.
//     console.log(`Server running on http://localhost:${PORT}`);
// });

//PS: We have an error because we do not have a route yet.

// Step 5: Create our First route

// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//     res.send("Welcome to my Node.js API!");
// });

//what do we have here?
//GET -> http method
// / -> url/ route
// (req, res) -> request and response
// resq -> contains info coming from client
// res -> we use this to return something to the client

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

//step 6: let's create a real route


// const express = require("express");
// const app = express();
// const PORT = 3000;


// app.get("/about", (req, res) => {
//     res.send("This is my student API.");
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

//step 7: let's return a real json

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/student", (req, res) => {

    // const student = {
    //     id: 1,
    //     name: "Navin",
    //     course: "Computer Science"
    // };

    const students = [
    {
        id: 1,
        name: "Elera",
        course: "Software Engineering"
    },
    {
        id: 2,
        name: "Brian",
        course: "Computer Science"
    },
    {
        id: 3,
        name: "J'Isabelle",
        course: "Cyber Security"
    }
];

    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//step 8: what if we need only 1 student?

app.get("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    res.json(student);
});

// :id -> is a URL parameter
//if /students/2
// it means req.params.id contains "2" (it is a string)
// if we need it in int, we do parseint(req.params.id)


//step 9:

//the above code will give an error if the student with specific id is not found

// app.get("/students/:id", (req, res) => {

//     const id = parseInt(req.params.id);

//     const student = students.find(student => student.id === id);

//     if (!student) {
//         return res.status(404).json({
//             message: "Student not found"
//         });
//     }

//     res.json(student);
// });


// step 10

// the codes we saw above will not work properly with a post, because we cannot read an incoming json yet.
// to read it, we use app.use(express.json());

//if a client sends this:
// {
//     "name": "Umar",
//     "course": "Web Development"
// }

//we need to read the incoming json -> we read from the body using: req.body
//for the name it will be req.body.name
//for course it will be req.body.course

//express.json handles it for us

//post e.g partly
// app.post("/students", (req, res) => {

//     const newStudent = {
//         id: students.length + 1,
//         name: req.body.name,
//         course: req.body.course
//     };

//     students.push(newStudent);

//     res.status(201).json(newStudent);
// });

// 201 means created


//step 11: we can also add validations/ checks

// app.post("/students", (req, res) => {

//     const { name, course } = req.body;

//     if (!name || !course) {
//         return res.status(400).json({
//             message: "Name and course are required"
//         });
//     }

//     const newStudent = {
//         id: students.length + 1,
//         name: name,
//         course: course
//     };

//     students.push(newStudent);

//     res.status(201).json(newStudent);
// });


//what is this?
// const { name, course } = req.body;

//it is the same as:
// const name = req.body.name;
// const course = req.body.course;