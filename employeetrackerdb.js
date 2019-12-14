const inquirer = require("inquirer");
const util = require("util");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "OurLov3!",
  database: "employeetrackerDB"
});

function promptUser() {
    return inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View Roles", 
                  "View Departments", 
                  "View Employees", 
                  "Add Roles", 
                  "Add Departments",
                  "Add Employees", 
                  "Update Employee Roles",
                  "Exit"
                ]
      }
    ])
    .then(function(answer){
      switch (answer.action) {
        case "View Roles":
          viewRoles();
          break;

        case "View Departments":
          viewDepartments();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "Add Roles":
          addRole();
          break;

        case "Add Departments":
          addDept();
          break;

        case "Add Employees":
          addEmployee();
          break;

        case "Exit":
          connection.end();
          break;
      }
    })
    ;
  }

  // view all the roles in the database (employeetrackerDB)
function viewRoles() {
  var query = "SELECT * FROM roles"
  connection.query(query, function(err, res){
    if (err) throw err
    console.log("the response is", res)
  })
  connection.end()
}

// view all the departments in the database (employeetrackerDB)
function viewDepartments() {
  var query = "SELECT * FROM department"
  connection.query(query, function(err, res){
    if (err) throw err
    console.log("the response is", res)
  })
  connection.end()
}

// view all the employees in the database (employeetrackerDB)
function viewEmployees() {
  var query = "SELECT * FROM employees"
  connection.query(query, function(err, res){
    if (err) throw err
    console.log("the response is", res)
  })
  connection.end()
}

// need to add a new role to the db
// prompt the user for the required fields
function addRole() {
  inquirer 
    .prompt([
      {
      type: "input",
      name: "role",
      message: "What is the name of the new role?"
    },
    {
      type: "number",
      name: "salary",
      default: 0000,
      message: "What is the salary for this role?"
    },
    {
      type: "input",
      name: "department",
      message: "What is the department assignment for the new role?"
    }
  ])
  // use the values returned from the prompt to construct the insert query
    .then(function(answer) {
      const newRole = answer.role
      const newSalary = answer.salary
      const roleDepartment = answer.department
      const newQuery = connection.query("INSERT INTO roles SET ?",
      [
        {
          title: newRole,
          salary: newSalary,
          dept_id: roleDepartment
        }
      ], 
      function(err, res){
        if (err) throw err
        console.log("All the new role is", res)
      });
      console.log("the query is", newQuery.sql)
    })
  .then(function() {
    connection.end()
  })
  }

  // need to add a new department to the db
// prompt the user for the required fields
function addDept() {
  inquirer 
    .prompt([
      {
      type: "input",
      name: "department",
      message: "What is the name of the new department?"
    }
  ])
  // use the values returned from the prompt to construct the insert query
    .then(function(answer) {
      const newDept = answer.department
      const newQuery = connection.query("INSERT INTO department SET ?",
      [
        {
          dept_name: newDept
        }
      ], 
      function(err, res){
        if (err) throw err
        console.log("All the new dept is", res)
      });
      console.log("the query is", newQuery.sql)
    })
  .then(function() {
    connection.end()
  })
  }

  // need to add a new employee to the db
// prompt the user for the required fields
function addEmployee() {
  inquirer 
    .prompt([
      {
      type: "input",
      name: "firstName",
      message: "What is the first name of the new employee?"
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the last name of the new employee?"
    },
    {
      type: "input",
      name: "newEmpDept",
      message: "What is the ID of the department for the new employee?"
    }
  ])
  // use the values returned from the prompt to construct the insert query
    .then(function(answer) {
      const newEmpFirstName = answer.firstName
      const newEmpLastName = answer.lastName
      const newEmpDeptID = answer.newEmpDept
      const newQuery = connection.query("INSERT INTO employees SET ?",
      [
        {
          first_name: newEmpFirstName,
          last_name: newEmpLastName,
          role_id: newEmpDeptID
        }
      ], 
      function(err, res){
        if (err) throw err
        console.log("All the new dept is", res)
      });
      console.log("the query is", newQuery.sql)
    })
  .then(function() {
    connection.end()
  })
  }


promptUser()

// EXAMPLE CODE
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   promptUser()
//   .then(function(answer){
//               const usrAction = answer.action
              
//               const newQuery = connection.query("SELECT * FROM employees WHERE ?",
//         [
//         {
//             id: 1,
//         }
//         ],
//         function(err, res){
//             if (err)
//             throw err
//             console.log("oops", res)
//           });
//               console.log("the query is", newQuery.sql)
//           })
//           .then(function(){
//             connection.end();
//           });

//   selectAllSongs();
//   selectAllHoliday();
//   createSongs();
//   updateSongs();
//   deleteSong();

  
//   connection.end();
// });


//   function createSongs(){
//     connection.query("INSERT INTO songs SET ?",
//     {
//         artist: 'Elvis',
//         title: 'jailhouse rock',
//         genre: 'rock'

//     }, function(err, res){
//       if (err)
//       throw err
//       console.log('New song added\n', res)
//     })
//   }

//   function updateSongs(){
//     var query = connection.query("UPDATE songs SET ? WHERE ?",
//     [
//     {
//         genre: 'blues'

//     }, 
//     {
//         artist: 'Elvis'

//     }
//     ],
//     function(err, res){
//       if (err)
//       throw err
//       console.log('New song updated\n', res)
//     });
//     console.log(query.sql)
//   }

//   function deleteSong(){
//     var query = connection.query("DELETE FROM songs WHERE ?",
//     [
//     {
//         artist: 'Elvis'

//     }
//     ],
//     function(err, res){
//       if (err)
//       throw err
//       console.log('song deleted\n', res)
//     });
//     console.log(query.sql)
//   }
