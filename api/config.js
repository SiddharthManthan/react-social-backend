import dotenv from "dotenv";

// Read Env
dotenv.config();

const config = {
    hostname: process.env.HOSTNAME,
    apiport: process.env.SOCIALBOOK_API_PORT,
    jwtsecret: process.env.JWTSECRET,
    db: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        name: process.env.DBNAME,
    },
};

export default config;
