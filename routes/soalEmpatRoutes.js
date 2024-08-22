const express = require('express');
const app = express();

app.use(express.json());

const soalEmpatRoutes = require('../controllers/soalEmpatController');
app.post('/BMI', soalEmpatRoutes.rumusBMI);

module.exports = app;