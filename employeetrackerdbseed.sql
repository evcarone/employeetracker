DROP DATABASE IF EXISTS employeetrackerDB;

CREATE DATABASE employeetrackerDB;

USE auctionDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30)
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(5,2),
  dept_id INT(5),
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(5),
  manager_id INT(45),
  PRIMARY KEY (id)
);

INSERT INTO department (dept_name)
VALUES ("finance"), ("engineering") ;

INSERT INTO roles (title, salary, dept_id)
VALUES ("controller", "150000.00", "1"), ("engineering", "200000.00", "2") ;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("linda", "money", "1"), ("tom", "coder", "2") ;



-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);