// Purpose: This is the main entry point of the application.
// Description: It sets up the Express server, includes necessary middleware (like body-parser), configures static file serving,
// initializes routes, and starts the server. This is where the application "starts" when you run it.

const express = require("express");
const routes = require("./routes");

const app = express();
routes(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
