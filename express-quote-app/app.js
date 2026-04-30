const express = require("express");
const app = express();

// use EJS as the view engine
app.set("view engine", "ejs");

// serve css
app.use(express.static("public"))

// load data file
const quotes = require("./data/quotes.json");

// Start server
app.listen(3000, () => {

  console.log("Server running on http://localhost:3000");
});

// Test a route with app.get
app.get("/", (req, res) => {
  
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    res.render("index", { quote: random });

});

app.get("/browse", (req, res) => {

   res.render("browse", { quotes});

});

app.get("/browse/:id", (req, res) => {
  const quote = quotes.find(q => q.id == req.params.id);

  if (!quote) {
    return res.send("Quote not found");
  }

    res.render("quote", { quote });

});

app.get("/about", (req, res) => {

    res.render("about");

});