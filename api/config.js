import dotenv from "dotenv";

// Read Env
dotenv.config();

const config = {
    hostname: process.env.HOSTNAME,
    apiport: process.env.APIPORT,
    jwtsecret: process.env.JWTSECRET,
    db: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        name: process.env.DBNAME,
    },
};

export default config;
