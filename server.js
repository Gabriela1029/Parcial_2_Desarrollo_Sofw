const express = require('express');
const tasksRouter = require('./src/controller/tasksController');
const errorHandler = require('./src/middleware/errorHandler');
const { seed } = require('./src/utils/seedData');

const app = express();
app.use(express.json());

app.use('/tasks', tasksRouter);
app.use(errorHandler);
seed();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Task app running on port ${PORT}`));