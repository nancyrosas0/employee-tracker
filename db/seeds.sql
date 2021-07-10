-- // add employee names, salaries and roles

-- INSERT INTO department(department_name)
-- VALUES
-- ('Accounting'),
-- ('Human Resources'),
-- ('Operations'),
-- ('Transportation');

-- INSERT INTO roles(title, salary, department_id)
-- VALUES
-- ('Accountant', 60000, 1),
-- ('Accounting Manager', 100000, 1),
-- ('HR Generalist', 75000, 2),
-- ('HR Manager', 1200000, 2),
-- ('Warehouse', 50000, 3),
-- ('Transportation Manager', 75000, 4);

-- INSERT INTO employees(first_name, last_name, role_id, manager_id)
-- VALUES
-- ('Broads', 'Kim', 1, 2),
-- ('Torres', 'Joe', 2, NULL),
-- ('Pie', 'Gerald', 3, 3),
-- ('Gutierrez', 'Eve', 4, NULL),
-- ('Dye', 'Michael', 5, 6),
-- ('Dominguez', 'Mario', 6, NULL);

use employeeTracker_db;
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Human Resources'),
    ('Finance'),
    ('Transportation');
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Human Resources Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Transportation VP', 250000, 4),
    ('Driver', 190000, 4);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Michael', 'Mann', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kaleb', 'Evans', 4, 3),
    ('Kwame', 'Brown', 5, NULL),
    ('Charles', 'Dietz', 6, 5),
    ('Terry', 'Sanchez', 7, NULL),
    ('Ryan', 'Hernandez', 8, 7);
