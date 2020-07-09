-- Department Table --
INSERT INTO department (dept_name)
VALUES ("Management");
VALUES ("Accounting"), ("HR"), ("Milling"), ("Metal"), ("Building"), ("Finishing"), ("Hardware"), ("Shipping");

SELECT * FROM department;


-- Role Table --
INSERT INTO role (title, salary, department_id)
VALUES ("Foreman", 60000, 9);
VALUES ("CNC Operator", 45000, 3), ("Welder", 38000, 4), ("Edge Bander", 30000, 3), ("Hardwoods", 34000, 3), ("Nuevo Builder", 30000, 5),
("Signature Builder", 45000, 5), ("Finisher", 50000, 6), ("Decorator", 42000, 7), ("Packer", 32000, 8);

SELECT * FROM role;

-- Employee Table --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Casey", "Mack", 1, null), ("Bill", "Murray", 2, null), ("Ron", "Millhouse", 9, null);
