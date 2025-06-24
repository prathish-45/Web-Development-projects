import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Guy's</h1>");
    
})

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>My name is Prathish.<br>I'm a Web developer.</p>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>+91 9342087946</p>");
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})