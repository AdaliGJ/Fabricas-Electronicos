//Rutas para electronicos
const express = require('express');
const router = express.Router();
const electronicoController = require('../controllers/electronicoController');

//api/electronicos
router.post('/',electronicoController.crearElectronicoTelevisor);


module.exports =  router;