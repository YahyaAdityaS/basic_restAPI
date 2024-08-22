const express = require('express');
const app = express();

app.use(express.json());

const soalTigaRoutes = require('../controllers/soalTigaController');

app.post('/decimalToBinary', soalTigaRoutes.decimalToBinary);
app.post('/binaryToDecimal', soalTigaRoutes.binaryToDecimal);
app.post('/octalToHexadecimal', soalTigaRoutes.octalToHexadecimal);
app.post('/hexadecimalToOctal', soalTigaRoutes.hexadecimalToOctal);

module.exports = app;