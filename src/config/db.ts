import mysql from "mysql2/promise";

// Create the connection to database

const getConnection = async () => {
  const connection = await mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodejs_backend",
  });
  try {
    const [results, fields] = await connection.query("SELECT * FROM `user` ");

    console.log(results); // results contains rows returned by server
  } catch (err) {
    console.log(err);
  }
};

export { getConnection };
