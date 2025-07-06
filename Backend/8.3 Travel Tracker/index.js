import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: 'password',
  port: 5432
});

db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted(){
  const result = await db.query("SELECT * FROM visited_countries");
  const countries = [];
  result.rows.forEach(code => {
    countries.push(code['country_code']);
  });
  return countries;
}


app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisisted();
  res.render("index.ejs", {countries: countries, total: countries.length});
});


app.post("/add", async (req, res) => {
  
  try {
    const addCountry = req.body;
    let newCountry = await db.query("SELECT country_code from countries WHERE country_name = $1", [addCountry.country]);

    const data = newCountry.rows[0];
    const country_code = data.country_code;

    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [country_code]);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "The country name already exists"
      });
    }

  } catch (error) {
    console.log(error);
    const countries = await checkVisisted();
    res.render(
      "index.ejs",{
        countries: countries,
        total: countries.length,
        error: "The country name does not exists"
      }
    );
  }

  
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
