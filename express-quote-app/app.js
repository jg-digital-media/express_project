const express = require("express");
const app = express();

// load data file
const quotes = require("./data/quotes.json");

// Start server
app.listen(3000, () => {

  console.log("Server running on http://localhost:3000");
});

// Test a route with app.get
app.get("/", (req, res) => {
  
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    res.send(`
        <h1>Daily Quote</h1>
        <blockquote>${random.quote}</blockquote>
        <p>- ${random.author}</p>
        <a href="/browse">Browse Quotes</a>
    `);

});

app.get("/browse", (req, res) => {

  let html = "<h1>All Quotes</h1>";

  quotes.forEach(q => {
    html += `<p><a href="/browse/${q.id}">${q.quote}</a></p>`;
  });

  html += `<a href="/">Back</a>`;

  res.send(html);

});

app.get("/browse/:id", (req, res) => {
  const quote = quotes.find(q => q.id == req.params.id);

  if (!quote) {
    return res.send("Quote not found");
  }

  res.send(`
    <h1>Quote</h1>
    <blockquote>${quote.quote}</blockquote>
    <p>- ${quote.author}</p>
    <a href="/browse">Back</a>
  `);

});