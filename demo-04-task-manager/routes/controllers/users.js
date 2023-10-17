// Purpose: Controller for user-related operations, in this case, tasks.
// Description: Contains the business logic for operations related to tasks (e.g., listing tasks,
// adding a new task). It interfaces with the models.js to interact with the data and sends the appropriate
// response back to the user or client.

const taskModel = require("../../models");

exports.addTask = (req, res) => {
  const task = req.query.task;
  taskModel.addTask(task);
  res.redirect("/");
};

exports.listTasks = (req, res) => {
  const tasks = taskModel.getTasks();
  res.type("html");
  res.send(`
    <h1> Tasks </h1>
    <ul>
        ${tasks.map((task) => `<li>${task}</li>`).join("")}
    </ul>
    <form action="/add-task" method="GET">
        <input type="text" name="task" placeholder="Enter a Task">
        <button type="submit">Add a task</button>
    </form>
  `);
};
