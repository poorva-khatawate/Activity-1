# Calculator Microservice

This is a basic calculator microservice implemented using Node.js and Express. It supports basic arithmetic operations: addition, subtraction, multiplication, and division.

## Objectives

- Set up a Node.js environment
- Create a basic Express server
- Implement calculator functions (addition, subtraction, multiplication, division)
- Test the microservice using Postman or a similar tool

## Prerequisites

- Node.js installed
- Visual Studio Code (VSCode) installed

## Setup

### Step 1: Set Up Your Development Environment

1. **Install Node.js**: [Download and install Node.js](https://nodejs.org/).
2. **Install Visual Studio Code**: [Download and install VSCode](https://code.visualstudio.com/).

### Step 2: Initialize a New Node.js Project

1. Open VSCode and create a new directory for your project.
2. Open a terminal in VSCode (`Ctrl + ` or `View > Terminal`).
3. Run the following commands:
    ```sh
    npm init -y
    npm install express
    ```

### Step 3: Create the Server

1. In your project directory, create a file named `server.js`.
2. Add the following code to `server.js` to set up a basic Express server:

    ```js
    const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.json());

    app.listen(port, () => {
        console.log(`Calculator microservice listening at http://localhost:${port}`);
    });
    ```

### Step 4: Implement Calculator Functions

1. Define routes for basic calculator operations (addition, subtraction, multiplication, division).
2. Add the following code to `server.js`:

    ```js
    app.get('/add', (req, res) => {
        const { a, b } = req.query;
        const result = parseFloat(a) + parseFloat(b);
        res.json({ result });
    });

    app.get('/subtract', (req, res) => {
        const { a, b } = req.query;
        const result = parseFloat(a) - parseFloat(b);
        res.json({ result });
    });

    app.get('/multiply', (req, res) => {
        const { a, b } = req.query;
        const result = parseFloat(a) * parseFloat(b);
        res.json({ result });
    });

    app.get('/divide', (req, res) => {
        const { a, b } = req.query;
        if (parseFloat(b) === 0) {
            res.status(400).json({ error: 'Division by zero' });
        } else {
            const result = parseFloat(a) / parseFloat(b);
            res.json({ result });
        }
    });
    ```

### Step 5: Test the Microservice

1. Start the server by running the following command in your terminal:
    ```sh
    node server.js
    ```

2. Use Postman or any other API testing tool to send requests to your microservice:

    - **Addition**: `http://localhost:3000/add?a=1&b=2`
    - **Subtraction**: `http://localhost:3000/subtract?a=5&b=3`
    - **Multiplication**: `http://localhost:3000/multiply?a=2&b=4`
    - **Division**: `http://localhost:3000/divide?a=8&b=2`

## .gitignore

To ensure certain files and directories are not tracked by Git, create a `.gitignore` file in your project’s root directory with the following content:

