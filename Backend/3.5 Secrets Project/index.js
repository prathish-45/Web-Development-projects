//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// const password = "ILoveProgramming";
// var userPassword = "";

app.use(bodyParser.urlencoded({extended: true}));

var userIsAuthorised = false;

const checkPassword = (req, res, next) => {
    const userPassword = req.body['password'];
    if (userPassword === "ILoveProgramming") {
        userIsAuthorised = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log("Server is running on " + port);
});
