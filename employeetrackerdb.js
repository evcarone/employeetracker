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
        type: "input",
        name: "name",
        message: "What is the name of your item?"
      },
      {
        type: "input",
        name: "category",
        message: "What is the category of your item?"
      },
      {
        type: "number",
        name: "price",
        message: "What is the price of your item?"
      },
    ]);
  }


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // promptUser()
  // .then(function(answer){
  //             const newItem = answer.name
  //             const newItemCategory = answer.category
  //             const newItemPrice = answer.price
              
  //             const newQuery = connection.query("INSERT INTO items SET ?",
  //       [
  //       {
  //           productName: newItem,
  //           category: newItemCategory,
  //           bid: newItemPrice
  //       }
  //       ],
  //       function(err, res){
  //           if (err)
  //           throw err
  //           console.log('oops\n', res)
  //         });
  //             console.log(" the user song is", newItem)
  //             console.log("the new query is", newQuery.sql)
  //         })
  //         .then(function(){
  //           connection.end();
  //         });

//   selectAllSongs();
//   selectAllHoliday();
//   createSongs();
//   updateSongs();
//   deleteSong();

  
//   connection.end();
});

// function selectAllSongs(){
//   connection.query("SELECT * FROM songs", function(err, res){
//     if (err)
//     throw err
//     console.log(res)
//   })
// }

// function selectAllHoliday(){
//     connection.query("SELECT * FROM songs WHERE genre = ?",['holiday'], function(err, res){
//       if (err)
//       throw err
//       console.log(res)
//     })
//   }

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

  
//   promptUser()
//       .then(function(answer){
//           const usrSong = answer.name
//           const newQuery = connection.query("SELECT * FROM songs WHERE ?",
//     [
//     {
//         title: usrSong

//     }
//     ],
//     function(err, res){
//         if (err)
//         throw err
        // console.log('oops\n', res)
    //   });
    //       console.log(" the user song is", usrSong)
    //       console.log("the new query is", newQuery.sql)
    //   })