// Import Express.
const express = require("express");

// Import our student routes.
const studentRoutes = require("./routes/studentRoutes");

// Create the Express application.
const app = express();

// Tell Express to understand JSON.
// Without this, req.body will not work correctly.
app.use(express.json());

// Add /api before all student routes.
// Example: /students becomes /api/students.
app.use("/api", studentRoutes);

// Create a simple home route.
app.get("/", (req, res) => {
    // Send a message to the browser.
    res.send("Student API is running");
});

// Store the port number.
const PORT = 3000;

// Start the Express server.
app.listen(PORT, () => {
    // Display the server URL.
    console.log("Server running at http://localhost:" + PORT);
});
