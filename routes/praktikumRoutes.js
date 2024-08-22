const express = require('express');
const app = express();

app.use(express.json());

const praktikumController = require('../controllers/praktikumController');

// Menggunakan 'app' untuk mendefinisikan rute
app.get("/profil/:name/:age", praktikumController.profil);
app.post("/bujur_sangkar", praktikumController.bujur_sangkar);

// Tidak perlu mendefinisikan 'router' di sini, gunakan 'app' saja
// Jika ingin menggunakan 'profile' sebagai nama rute


module.exports = app;
