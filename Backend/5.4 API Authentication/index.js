import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "ceitprathish";
const yourPassword = "18052003Pr@thish";
const yourAPIKey = "29d6dc90-13a2-4788-a883-cde559f57df7";
const yourBearerToken = "4aa3ea3c-a266-432d-ac48-36bacd4fe8e2";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  // const response 
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const noContent = JSON.stringify(response.data);
    res.render("index.ejs", {content: noContent});
  } catch (error) {
    console.log(error.message);
    
  }
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    });
    const basicContent = JSON.stringify(response.data);
    res.render("index.ejs", {content: basicContent});
  } catch (error) {
    console.log(error.message); 
  }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/filter?score=5", {
      params: {
        apiKey: yourAPIKey
      }
    });
    const apiContent = JSON.stringify(response.data);
    res.render('index.ejs', {content: apiContent});
  } catch (error) {
    console.log(error.message);
    
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
