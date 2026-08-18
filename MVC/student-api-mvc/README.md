# Student API - Node.js + Express + MVC + MySQL

This project is intentionally simple and heavily commented for beginner teaching.

## MVC idea

```text
Client / Postman
      |
      v
    Route
      |
      v
 Controller
      |
      v
    Model
      |
      v
   MySQL
```

- Route = Which URL was requested?
- Controller = What should happen?
- Model = Talk to the database.
- Database = Store the data.

## Requirements

- Node.js installed
- XAMPP or another MySQL server
- phpMyAdmin or MySQL client
- Postman is useful for testing

## Setup

### 1. Start MySQL

If you use XAMPP, start MySQL.

### 2. Create the database

Open phpMyAdmin.

Go to the Import tab and import:

```text
database/student_db.sql
```

This creates:

```text
student_db
```

and the table:

```text
students
```

### 3. Install Node.js packages

Open a terminal inside the project folder:

```bash
npm install
```

### 4. Start the API

```bash
npm start
```

You should see:

```text
Connected to MySQL database.
Server running at http://localhost:3000
```

## Endpoints

### Get all students

```http
GET http://localhost:3000/api/students
```

### Get one student

```http
GET http://localhost:3000/api/students/1
```

### Create a student

```http
POST http://localhost:3000/api/students
```

JSON body:

```json
{
    "name": "Navin",
    "email": "navin@gmail.com"
}
```

### Update a student

```http
PUT http://localhost:3000/api/students/1
```

JSON body:

```json
{
    "name": "Navin Sharma",
    "email": "navin.sharma@gmail.com"
}
```

### Delete a student

```http
DELETE http://localhost:3000/api/students/1
```

## Project structure

```text
student-api-mvc/
|
|-- config/
|   `-- database.js
|
|-- controllers/
|   `-- studentController.js
|
|-- database/
|   `-- student_db.sql
|
|-- models/
|   `-- studentModel.js
|
|-- routes/
|   `-- studentRoutes.js
|
|-- app.js
|-- package.json
`-- README.md
```

## Request flow example

When Postman sends:

```text
GET /api/students/1
```

The request flows like this:

```text
Postman
   |
   v
studentRoutes.js
   |
   v
studentController.js
   |
   v
studentModel.js
   |
   v
MySQL
```
