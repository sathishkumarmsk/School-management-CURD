# School Management System

The School Management System is a web application built with React and Node.js that helps manage courses, staff, and students in a school.

## Features

    - Create, retrieve, update, and delete courses
    - Create, retrieve, update, and delete staff members
    - Create, retrieve, update, and delete students
    - Email verification for student registration

## Technologies Used

    - Frontend: React
    - Backend: Node.js with Express
    - Database: MongoDB

## Getting Started

### Prerequisites

    - Node.js installed on your machine
    - MongoDB database connection

### Installation

    Clone the repository:
        -  git clone https://github.com/your-username/school-management-system.git
        - Install dependencies for the frontend and backend:
            cd school-management-system
            cd frontend
            npm install
            cd ..
            cd backend
            npm install

#### Configure the environment variables:

    Create a .env file in the backend directory.
    Set the following environment variables in the .env file:
    MONGODB_URI: MongoDB connection URI

## Start the frontend

    cd frontend
    npm start

## Start the server

cd ..
node server.js
Access the application at http://localhost:5000.

## API Endpoints

### Courses

    GET /api/courses: Get all courses
    POST /api/courses: Create a new course
    PUT /api/courses/:id: Update a course by ID
    DELETE /api/courses/:id: Delete a course by ID
    Staff
    GET /api/staff: Get all staff members
    POST /api/staff: Create a new staff member
    PUT /api/staff/:id: Update a staff member by ID
    DELETE /api/staff/:id: Delete a staff member by ID
    Students
    GET /api/students: Get all students
    POST /api/students: Create a new student
    PUT /api/students/:id: Update a student by ID
    DELETE /api/students/:id: Delete a student by ID

### Acknowledgements

    React
    Node.js
    Express
    MongoDB
    Nodemailer
