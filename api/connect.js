import mysql from "mysql2";

//TODO: Use env file
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "social",
});
