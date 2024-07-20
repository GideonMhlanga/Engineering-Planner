const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new task
router.post('/', async (req, res) => {
  const { title, description, assignedTo } = req.body;
  const newTask = new Task({ title, description, assignedTo, status: 'pending' });
  await newTask.save();
  res.json(newTask);
});

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Close a task
router.post('/:taskId/close', async (req, res) => {
  const { taskId } = req.params;
  const { resolution } = req.body;
  const task = await Task.findById(taskId);
  task.status = 'completed';
  task.resolution = resolution;
  await task.save();
  res.json(task);
});

module.exports = router;
