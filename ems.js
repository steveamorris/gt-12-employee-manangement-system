const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "PTv^AoPKDaM2nakm9!Ae",
  database: "ems_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  init();
});

// Inquirer Prompts
// what would you like to do?
// View All Employees
// View All Employees by Dept
// View All Employees by Manager
// Add Employee
// Remove Employee
// Update Employee Role
// Update Employee Manager

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees by Dept",
          "View All Employees by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View All Employees":
          empViewAll();
          break;
        case "View All Employees by Dept":
          empViewDept();
          break;
        case "View All Employees by Manager":
          empViewMgr();
          break;
        case "Add Employee":
          empAdd();
          break;
        case "Remove Employee":
          empDel();
          break;
        case "Update Employee Role":
          empUpdate();
          break;
        case "Update Employee Manager":
          empUpdateMgr();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

function empViewAll() {
    console.log("View all Employees");
    init();
};

function empViewDept() {
    console.log("View All Employees by Dept");
    init();
};

function empViewMgr() {
    console.log("View all Employees by Manager");
    init();
};

function empAdd() {
    console.log("Add Employee");
    init();
};

function empDel() {
    console.log("Remove Employee");
    init();
};

function empUpdateRole() {
    console.log("Update Employee Role");
    init();
};

function empUpdateMgr() {
    console.log("Update Employee Manager");
    init();
};

