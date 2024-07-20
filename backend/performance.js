const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Task = require('../models/Task');

// Get performance data
router.get('/', async (req, res) => {
  const users = await User.find();
  const performanceData = await Promise.all(users.map(async user => {
    const tasks = await Task.find({ assignedTo: user._id });
    const completedTasks = tasks.filter(task => task.status === 'completed');
    const completionPercentage = (completedTasks.length / tasks.length) * 100;
    return {
      id: user._id,
      name: user.name,
      completionPercentage: completionPercentage.toFixed(2)
    };
  }));
  res.json(performanceData);
});

module.exports = router;
