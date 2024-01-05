// Criando conexão MySQL
const mysql = require('mysql');

var connection = mysql.createConnection({
     host: "localhost",
     user: "root",
     pass: ""
})

connection.connect((err) => {
     if (err) {
          throw err;
     } else {
          console.log("Connected!");
     }
})