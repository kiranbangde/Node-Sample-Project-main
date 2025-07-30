const mysql = require("mysql2");

function connectDb() {
  return new Promise((resolve, reject) => {
    const db = mysql.createConnection({
      host: "20.197.42.128",
      user: "waayupro_stgusr",
      password: "jcJIPhCfIp9D31",
      database: "waayupro_stgdb",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    db.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL:", err);
        return reject(err);
      }
      console.log("Connected to MySQL database");
      resolve(db);
    });
  });
}

module.exports = connectDb;
