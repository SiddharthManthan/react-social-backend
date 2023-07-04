import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const MAXAGE = 31 * 24 * 60 * 60;

export const register = (req, res) => {
    // Check user if exists
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists !");

        // Create New User
        // Hash the password
        //TODO: How does salt work ?
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const q =
            "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";
        const values = [
            req.body.username,
            req.body.email,
            hashedPassword,
            req.body.name,
        ];
        //TODO: Pass an array like this
        db.query(q, [values], (err, data) => {
            if (err) res.status(500).json(err);
            return res.status(200).json("User has been created.");
        });
    });
};

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found !");

        const checkPassword = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );
        if (!checkPassword)
            return res.status(400).json("Wrong Password or Username");

        //TODO: Use env
        const token = jwt.sign({ id: data[0].id }, "TypSML6yG7aHIqb969hb");
        const { password, ...others } = data[0];
        return res
            .status(200)
            .cookie("accessToken", token, {
                httpOnly: true,
                maxAge: MAXAGE * 1000,
            })
            .json(others);
    });
};

export const logout = (req, res) => {
    // React app and api server port number different
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none",
    })
        .status(200)
        .json("User has been logged out.");
};
