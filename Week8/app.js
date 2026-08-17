// Import the Express framework
// Express helps us create a web server and APIs
const express = require('express');

// Import Swagger UI
// This displays our API documentation in the browser
const swaggerUi = require('swagger-ui-express');

// Import swagger-jsdoc
// This reads the Swagger comments written inside our JavaScript files
const swaggerJsDoc = require('swagger-jsdoc');


// Create the Express application
const app = express();


// Define the port number
// If a PORT environment variable exists, use it
// Otherwise, use port 3000
const port = process.env.PORT || 3000;


// This allows our API to receive JSON data
// Example:
// {
//   "name": "Navin"
// }
app.use(express.json());


// ---------------------------
// SWAGGER CONFIGURATION
// ---------------------------

// Create the Swagger configuration
const swaggerOptions = {

    // "definition" contains general information about our API
    definition: {

        // Tell Swagger that we are using OpenAPI version 3
        openapi: '3.0.0',

        // Information displayed at the top of Swagger
        info: {

            // Name of our API
            title: 'Node JS APIs',

            // Version of our API
            version: '1.0.0',

            // Short description of the API
            description: 'API documentation',
        },

        // Define where our API is running
        servers: [
            {
                // Our local Node.js server
                url: 'http://localhost:3000',
            },
        ],
    },


    // Tell Swagger where to find our Swagger comments
    //
    // "./routes/*.js" means:
    //
    // Go inside the routes folder
    // Look at every JavaScript file
    //
    // Example:
    // routes/students.js
    // routes/users.js
    // routes/products.js
    apis: ['./routes/*.js'],
};


// swaggerJsDoc reads swaggerOptions
// It also scans our route files
// Then it creates the complete Swagger documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);


// Create the Swagger documentation page
//
// We will access it using:
//
// http://localhost:3000/api-docs
app.use(
    '/api-docs',

    // Load Swagger's web interface
    swaggerUi.serve,

    // Display the documentation we created
    swaggerUi.setup(swaggerDocs)
);


// ---------------------------
// LOAD OUR ROUTES
// ---------------------------

// Import students.js from the routes folder
const studentRoutes = require('./routes/students');

// Import users.js from the routes folder
const userRoutes = require('./routes/users');


// Tell Express to use the routes found inside students.js
app.use(studentRoutes);

// Tell Express to use the routes found inside users.js
app.use(userRoutes);


// ---------------------------
// START SERVER
// ---------------------------

// Start the web server
// It will listen on port 3000
app.listen(port, () => {

    // Display this message when the server starts
    console.log(`Server is running on http://localhost:${port}`);

    // Display the Swagger URL
    console.log(`Swagger: http://localhost:${port}/api-docs`);
});