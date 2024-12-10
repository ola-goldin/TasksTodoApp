# MERN Task Todo List App  

## Table of Contents  

- [Introduction](#introduction)  
- [Features](#features)  
- [Architecture](#architecture)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  

## Introduction  

The MERN Task Todo List App is a full-stack application built with the MERN stack (MongoDB, Express, React, and Node.js). It enables users to manage tasks by providing functionality to add, view, edit, and delete tasks. Data is stored securely in a MongoDB database. The app features a React-based frontend and an Express-powered backend.  

## Features  

- **Task Creation:** Add new tasks to the list and store them in the database.  
- **Task Editing:** Modify existing tasks directly within the list.  
- **Task Deletion:** Remove tasks from the list and database.  
- **Completion Tracking:** Mark tasks as complete or incomplete to monitor progress.  
- **Responsive Interface:** Designed to work seamlessly on both desktop and mobile devices.  

## Architecture  

- **Frontend:** Developed using React for an interactive and adaptive user interface.  
- **Backend:** Built with Node.js and Express to handle API requests efficiently.  
- **Database:** Tasks are stored in MongoDB, a scalable NoSQL database.  
- **State Management:** Uses React hooks for managing application state.  

## Installation  

Follow these instructions to set up and run the Task Todo List App locally:  

### Prerequisites  

Make sure you have the following installed:  

- Node.js  
- MongoDB (local instance or a service like MongoDB Atlas)  
- Git  

### Steps  

1. Clone the repository:  

    ```bash  
    git clone https://github.com/ola-goldin/TasksTodoApp.git
    ```  

2. Navigate to the project directory:  

    ```bash  
    cd TasksTodo  
    ```  

3. Install backend dependencies:  

    ```bash  
    cd server  
    npm install  
    ```  

4. Install frontend dependencies:  

    ```bash  
    cd ../client  
    npm install  
    ```  

5. Configure environment variables:  

    Create a `.env` file in the `server` directory and define your MongoDB connection string and other required variables:  

    ```env  
    MONGO_URI="mongodb+srv://YOUR_CONNECTION_STRING"  
    PORT=3001  
    ```  

6. Start the MongoDB server:  

    If using a local MongoDB instance, start it with:  

    ```bash  
    mongod  
    ```  

7. Launch the backend server:  

    ```bash  
    cd server  
    nodemon index.js  
    ```  

    The backend will be available at [http://localhost:3001](http://localhost:3001).  

8. Start the frontend server:  

    ```bash  
    cd ../client  
    npm run dev  
    ```  

    Access the frontend at [http://localhost:5173](http://localhost:5173).  

## Usage  

Once the app is up and running:  

- **Adding Tasks:** Use the input field to create a new task. Hit "Enter" or click the "Add" button to save the task.  
- **Editing Tasks:** Click on an existing task to update its content.  
- **Deleting Tasks:** Click the "Delete" button next to a task to remove it.  
- **Marking as Complete/Incomplete:** Toggle the checkbox to mark tasks as completed or incomplete.  

## API Endpoints  

The app's backend provides the following endpoints:  

- **GET** `/api/tasks` – Retrieve all tasks.  
- **POST** `/api/tasks` – Add a new task.  
- **PUT** `/api/tasks/:id` – Update an existing task.  
- **DELETE** `/api/tasks/:id` – Remove a task from the database.  
