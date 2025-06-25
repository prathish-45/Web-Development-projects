import express from 'express';
import ejs from 'ejs';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const tody = new Date("May 18, 2003");

let type = "a weekday";
let adv = "it's time to work hard";

const day = tody.getDay();
if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "it's time to have fun";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        daytype: type,
        advice: adv
    })
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})