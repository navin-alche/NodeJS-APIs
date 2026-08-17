const express = require('express');
const router = express.Router();


// --------------------------------------------------
// USER DATA
// --------------------------------------------------

let users = [
    {
        id: 1,
        name: "NellyVine"
    },
    {
        id: 2,
        name: "Princess"
    },
    {
        id: 3,
        name: "Tooshar"
    },
    {
        id: 4,
        name: "J'Isabelle"
    },
    {
        id: 5,
        name: "Sadia"
    },
    {
        id: 6,
        name: "Elera"
    },
    {
        id: 7,
        name: "Hanif"
    },
    {
        id: 8,
        name: "Sherif"
    },
    {
        id: 9,
        name: "Farhaan"
    },
    {
        id: 10,
        name: "Kimunila"
    },
    {
        id: 11,
        name: "Brian"
    },
    {
        id: 12,
        name: "Umar"
    },
    {
        id: 13,
        name: "Acher"
    },
    {
        id: 14,
        name: "Navin"
    },
    {
        id: 15,
        name: "Vikesh"
    }
];


// ==================================================
// GET ALL USERS
// ==================================================

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve list of users
 *     responses:
 *       200:
 *         description: A list of users is returned
 */
router.get("/api/users", (req, res) => {
    res.json(users);
});


// ==================================================
// GET USER BY ID
// ==================================================

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retrieve a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get("/api/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});


// ==================================================
// POST - CREATE NEW USER
// ==================================================

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Navin
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Name is required
 */
router.post("/api/users", (req, res) => {

    // Get name from the JSON body
    const name = req.body.name;

    // Check if name was provided
    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    // Create a new ID
    const newId = users.length > 0
        ? Math.max(...users.map(u => u.id)) + 1
        : 1;

    // Create the new user object
    const newUser = {
        id: newId,
        name: name
    };

    // Add user to array
    users.push(newUser);

    // 201 = Created
    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});


// ==================================================
// PUT - REPLACE A USER
// ==================================================

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Replace an existing user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Name
 *     responses:
 *       200:
 *         description: User replaced successfully
 *       400:
 *         description: Name is required
 *       404:
 *         description: User not found
 */
router.put("/api/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    // Find the position of the user in the array
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const name = req.body.name;

    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    // PUT replaces the whole user object
    users[index] = {
        id: id,
        name: name
    };

    res.json({
        message: "User replaced successfully",
        user: users[index]
    });
});


// ==================================================
// PATCH - PARTIALLY UPDATE A USER
// ==================================================

/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: Partially update a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Name
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.patch("/api/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Only update name if it was provided
    if (req.body.name !== undefined) {
        user.name = req.body.name;
    }

    res.json({
        message: "User updated successfully",
        user: user
    });
});


// ==================================================
// DELETE USER BY ID
// ==================================================

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete("/api/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users = users.filter(u => u.id !== id);

    res.json({
        message: "User deleted successfully",
        deletedUser: user
    });
});


// ==================================================
// DELETE ALL USERS
// ==================================================

/**
 * @swagger
 * /api/users:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete all users
 *     responses:
 *       200:
 *         description: All users deleted successfully
 */
router.delete("/api/users", (req, res) => {

    users = [];

    res.json({
        message: "All users deleted successfully"
    });
});


module.exports = router;