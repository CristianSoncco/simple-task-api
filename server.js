// server.js
const express = require('express');
const app = express();
const port = 3000;

// Sample list of tasks
const tasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Complete coding assignment', completed: true },
  { id: 3, title: 'Go for a run', completed: false },
];

// Define a simple endpoint to return the list of tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
