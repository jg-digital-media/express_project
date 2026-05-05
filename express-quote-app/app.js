const express = require("express");
const app = express();

// use EJS as the view engine
app.set("view engine", "ejs");

// serve css
app.use(express.static("public"))

// prepare for deployment with Render
const PORT = process.env.PORT || 3000;

// load data file
const quotes = require("./data/quotes.json");

// Start server
/* app.listen(3000, () => {

  console.log("Server running on http://localhost:3000");
});
 */

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});


app.use((req, res, next) => {
  res.locals.siteName = "Daily Quote App";
  res.locals.currentPath = req.path;
  next();
});


// Test a route with app.get
app.get("/", (req, res) => {
  
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    res.render("index", { quote: random, pageTitle: "Daily Quote App " });

});




app.get("/browse", (req, res) => {

    res.render("browse", { 
    
        quotes,
        pageTitle: "Browse Quotes List "

    });

});

app.get("/browse/:id", (req, res) => {

    const quote = quotes.find(q => q.id == req.params.id);

    if (!quote) {
        return res.send("Quote not found");
    }

    res.render("quote", { quote, pageTitle: "View Quote " });

});


app.get("/api/quotes", (req, res) => {

    res.json(quotes);
});

app.get("/about", (req, res) => {

    res.render("about", { pageTitle: "About "} );
});

