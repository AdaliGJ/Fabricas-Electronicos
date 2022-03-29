//Rutas para dispositivos individuales
const express = require('express');
const router = express.Router();
const controller = require('../controllers/dispositivosIndividualesController');

//api/clientes
router.post('/',controller.crearDispositivo);

module.exports =  router;