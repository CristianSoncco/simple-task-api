const express = require('express');
const cors = require('cors');

const tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
];

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());

  app.get('/api/tasks', (req, res) => {
    res.json(tasks);
  });

  app.post('/api/tasks', (req, res) => {
    const newTask = {
      id: tasks.length + 1,
      title: req.body.title,
      completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });

  app.put('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
      res.json(tasks[taskIndex]);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });

  app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });
};