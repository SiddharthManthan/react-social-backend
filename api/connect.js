import mysql from "mysql2";

// Todo: Use env file
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "social",
});
