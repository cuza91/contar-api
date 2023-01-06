const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

app.post("/number", (req, res) => {
  const number = req.body.number;
  res.send(`Number received: ${number}`);
});

app.get("/number", (req, res) => {
  res.send(`Number stored: ${number}`);
});

app.use(bodyParser.json())

