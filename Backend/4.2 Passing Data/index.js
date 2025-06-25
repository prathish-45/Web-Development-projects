import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
var letterLen;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

var letterLength = (req, res, next) => {
  letterLen = req.body['fName'].length + req.body['lName'].length;
  next()
}

app.use(letterLength);

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    length: letterLen
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
