// Purpose: Represents the data model or schema of the application.
// Description: Contains the structure and logic for handling tasks (e.g., storing and retrieving them).
// In this demonstration, it uses an in-memory array for simplicity, but in real-world applications, this might interface with a database.

let tasks = [];

function addTask(task) {
  tasks.push(task);
}

function getTasks() {
  return tasks;
}

module.exports = {
  addTask,
  getTasks,
};
