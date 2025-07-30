const mysql = require("mysql2/promise");

// Create a connection pool
const pool = mysql.createPool({
  host: "20.197.42.128",
  user: "waayupro_stgusr",
  password: "jcJIPhCfIp9D31",
  database: "waayupro_stgdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
