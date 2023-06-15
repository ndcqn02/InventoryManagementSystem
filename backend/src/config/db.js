// get the client
import mysql from "mysql2/promise";
// const mysql = require('mysql2');

// create the connection to database
console.log("Creating connection to pool ...");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "inventorymanagement",
});


export default pool;
