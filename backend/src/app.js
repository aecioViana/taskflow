const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.json({
        message: 'Bem-vindo à API TaskFlow!',
        status: 'Online'
    });
});

module.exports = app;