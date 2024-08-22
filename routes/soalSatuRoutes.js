const express = require('express');
const app = express();

app.use(express.json());

const soalSatuRoutes = require('../controllers/soalSatuController');

app.post('/balok', soalSatuRoutes.balok);
app.post('/kubus', soalSatuRoutes.kubus);
app.post('/tabung', soalSatuRoutes.tabung);
app.post('/bola', soalSatuRoutes.bola);

module.exports = app;