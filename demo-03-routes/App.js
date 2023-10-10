const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the main page!");
});

app.get("/queries/:query", (req, res) => {
  const query = req.params.query;
  res.type("html");

  res.send(`
        <p>You have requested the following query: ${query}</p>
        <a href="https://www.google.com/search?q=${query}">Go to google</a>
    `);
});

//www.google.com/search?q=dogs

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
