const express = require('express');
const routes = express.Router();
const {AstralMapController} = require('./controllers/AstralMapController');

// ROTA QUE VAI FAZER A INTEGRAÇÃO COM A API EXTERNA DE MAPA ASTRAL
routes.post('/postAstralData', AstralMapController )

module.exports = routes;
