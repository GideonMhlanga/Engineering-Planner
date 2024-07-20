const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/engineering-planner', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Import routes
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
const performanceRoutes = require('./routes/performance');

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/performance', performanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
