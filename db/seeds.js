// add employee names, salaries and roles

INSERT INTO department(department_id)
VALUES
('Accounting'),
('Human Resources'),
('Operations'),
('Transportation');

INSERT INTO roles(title, salary, department_id)
VALUES
('Accountant', 60000, 1),
('Accounting Manager', 100000, 1),
('HR Generalist', 75000, 2),
('HR Manager', 120000, 2),
('Warehouse', 50000, 3),
('Transportation Manager', 75000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Broads', 'Kim', 1, 2),
('Torres', 'Joe', 2, NULL),
('Pie', 'Gerald', 3, 3),
('Gutierrez', 'Eve', 4, NULL),
('Dye', 'Michael', 5, 6),
('Dominguez', 'Mario', 6, NULL);

