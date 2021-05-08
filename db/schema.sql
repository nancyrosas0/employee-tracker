//build 3 tables

DROP DATABASE IF EXISTS department;
DROP DATABASE IF EXISTS roles;
DROP DATABASE IF EXISTS employee;



CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL;
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employees(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_idd INT NOT NULL,
    PRIMARY KEY(id)
);