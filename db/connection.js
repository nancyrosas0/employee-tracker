const { createPromptModule } = require('inquirer');
const mysql =require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "password",
    database: 'employeeTracker_db'
});

module.exports = db;