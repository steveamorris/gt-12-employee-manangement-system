const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
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
      if(err) throw err;
      console.log("connected as id " + connection.threadId);
      connection.end();
  })