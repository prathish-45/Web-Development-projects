import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

const userInput = (req, res, next) => {
  bandName = req.body['street'] + req.body['pet'];
  next();
}

app.use(userInput);

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band name is:</h1><p>${bandName} ✌</p>`);
})

app.listen(port, () => {
  console.log(`Server running on ${port}`);
})