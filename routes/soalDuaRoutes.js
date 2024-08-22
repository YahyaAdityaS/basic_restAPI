const express = require('express');
const app = express();

app.use(express.json());

const soalDuaController = require('../controllers/soalDuaController');

app.get('/celcius/:celcius', soalDuaController.celcius);
app.get('/fahrenheit/:fahrenheit', soalDuaController.fahrenheit);
app.get('/kelvin/:kelvin', soalDuaController.kelvin);
app.get('/reamur/:reamur', soalDuaController.reamur);


module.exports = app;