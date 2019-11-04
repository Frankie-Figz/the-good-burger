// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

// Adding the keys import class
var keys = require("./keys.js");

console.log(keys);

var connection = mysql.createConnection({
  // Your host
  host: keys.mysqlEnv.host_name,
  // Your port
  port: keys.mysqlEnv.port,
  // Your username
  user: keys.mysqlEnv.user_name,
  // Your password
  password: keys.mysqlEnv.password,
  // Your database
  database: keys.mysqlEnv.database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;