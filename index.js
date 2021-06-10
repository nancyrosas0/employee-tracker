const inquirer = require('inquirer');
const db = require('./db/connection');

//when app starts, user will pick action
//create function for action to query db

const userAction = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View All Departments',
                    value: 'view_departments'
                },
                {
                    name: 'View All Roles',
                    value: 'view_roles'
                },
                {
                    name: 'View All Employees',
                    value: 'view_employees'
                },
                {
                    name: 'Add a Department',
                    value: 'add_department'
                },
                {
                    name: 'Add a Role',
                    value: 'add_role'
                },
                {
                    name: 'Add an Employee',
                    value: 'add_employee'
                },
                {
                    name: 'Update and Employee',
                    value: 'update_employee'
                },
                {
                    name: 'Exit Application',
                    value: 'exit'
                }
            ]
        }
    ]).then(answers => {
        switch(answers.action){
            case 'view_departments':
                return viewDepartments();
                break;
            case 'view_roles' :
                return viewRoles();
                break;
            case 'view_employees' :
                return viewEmployees();
                break;
            case 'add_department' :
                return addDepartment();
                break;
            case 'add_role' :
                return addRole();
                break;
            case 'add_employee' :
                return addEmployee();
                break;
            case 'update_employee' :
                return updateEmployee();
                break;
            default:
                return process.exit();
        }
    })
}

const viewDepartments = () => {
    var query = 'SELECT * FROM department'
    db.query(query, function(err, results) {
        console.log('hel;lo')
        console.log(results);
    }) 
    userAction();
}

const viewRoles = () => {

}

const viewEmployees = () => {
    //query db to get all info
    //return info


    
    //ask the user for action again
    userAction()
}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

const updateEmployee = () => {

}

userAction();