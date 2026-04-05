import dotenv from "dotenv";

// Read Env
dotenv.config();

const config = {
    apiport: process.env.SOCIALBOOK_API_PORT,
    jwtsecret: process.env.JWTSECRET,
    publicuploadfolder: process.env.PUBLIC_UPlOAD_FOLDER,
    db: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        name: process.env.DBNAME,
    },
};

export default config;
