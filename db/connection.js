const { createPromptModule } = require('inquirer');
const mysql =require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    //port: 3001,
    user: 'root',
    password: "password",
    database: 'employee_db'
});

module.exports = db;