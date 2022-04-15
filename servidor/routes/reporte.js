//Rutas para reportes
const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

//api/reportes
router.get('/', reporteController.obtenerReportes);
router.get('/:id', reporteController.obtenerReporte);


module.exports =  router;