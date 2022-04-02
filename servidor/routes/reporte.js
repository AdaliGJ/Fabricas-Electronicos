//Rutas para reportes
const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

//api/reportes
router.get('/', reporteController.obtenerReportes);


module.exports =  router;