
require('dotenv').config()

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("welcome to Twitter");
});

app.get("/login", (req, res) => {
  res.send('<h1>please login at chai aur code</h1>');
});

app.get("/swiggy", (req, res) => {
  res.send("What do you want to order today????");
});

app.listen(process.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
