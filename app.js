const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

let number =0;

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

app.use(bodyParser.json());

app.post("/number", (req, res) => {
  number = req.body.number;
  res.send(`Number received: ${number}`);
});

app.get("/number", (req, res) => {
  res.send(`Number stored: ${number}`);
});




