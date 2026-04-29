const express = require("express");
const app = express();

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// Test a route with app.get
app.get("/", (req, res) => {
  res.send("Hello from your Quote App!");
});

app.get("/browse", (req, res) => {
  res.send("Quotes list page");
});

app.get("/browse/1", (req, res) => {
  res.send("Single quote page");
});