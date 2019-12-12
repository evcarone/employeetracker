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
  salary DECIMAL(8,2),
  dept_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (dept_name)
VALUES ("finance"), ("engineering") ;

INSERT INTO roles (title, salary, dept_id)
VALUES ("controller", "150000.00", 1), ("engineering", "200000.00", 1) ;

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("linda", "money", 1), ("tom", "coder", 2) ;