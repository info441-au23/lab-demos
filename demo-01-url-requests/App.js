//npm init
//npm install express
//npm install fs

const express = require("express");

const app = express();

const PORT = 3000;

const fetchURLFromDatabase = async (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
};

app.get("*", async (req, res) => {
  const url = await fetchURLFromDatabase(req.url.substring(1));
  res.type("html");
  res.send(
    `
            <html>
                <body>
                <h1> You requested the following url: ${url} </h1>
                <a href=${url}>Go to the URL</a>
                </body>
            </html>
        `
  );
});

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
