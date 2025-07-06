import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'permalist',
  password: 'password',
  port: 5432
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;
    console.log(items);
    
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (error){
    console.log(error);
  }
  
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  const addResult = await db.query("INSERT INTO items(title) VALUES ($1)", [item]);

  console.log(item);
  
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const updatedItemId = req.body['updatedItemId'];
  const updatedItemTitle = req.body['updatedItemTitle'];
  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", 
      [updatedItemTitle, updatedItemId]
    );
    res.redirect("/");
  } catch(err) {
    console.log(err);
  }
  
});

app.post("/delete", async (req, res) => {
  const deleteItem = parseInt(req.body['deleteItemId']);
  try {
    await db.query("DELETE FROM items WHERE id = $1", [deleteItem]);
    console.log("Deleted Successfully");
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
