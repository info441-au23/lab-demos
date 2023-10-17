//Description: Serves as the central routing file, collecting and applying all route handlers (from controllers and APIs) to the
//Express application.

const users = require("./controllers/users");

module.exports = (app) => {
  app.get("/", users.listTasks);
  app.get("/add-task", users.addTask);
};
