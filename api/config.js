import dotenv from "dotenv";

// Read Env
dotenv.config();

const config = {
    apiport: process.env.SOCIALBOOK_API_PORT,
    jwtsecret: process.env.SOCIALBOOK_JWTSECRET,
    publicuploadfolder: process.env.SOCIALBOOK_PUBLIC_UPlOAD_FOLDER,
    db: {
        host: process.env.SOCIALBOOK_DBHOST,
        user: process.env.SOCIALBOOK_DBUSER,
        password: process.env.SOCIALBOOK_DBPASSWORD,
        name: process.env.SOCIALBOOK_DBNAME,
    },
};

export default config;
