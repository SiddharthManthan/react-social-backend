import mysql from "mysql2";
import config from "./config.js";

export const db = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.name,
});
