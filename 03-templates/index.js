const express = require("express");
const app = express();

//initialise hbs
const hbs = require("hbs");

//tell express that we are using hbs as our view engine
//view enginee allow us to render html page
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("index.hbs");
});

app.get("/lucky", function (req, res) {
  let lucky = Math.floor(Math.random() * 100 + 1);
  //we use render() to render html "lucky" file
  //send some data luckyNumber: random number
  //you can have varible in hbs file
  res.render("lucky", {
    luckyNumber: lucky,
  });
});

app.listen(3000);
