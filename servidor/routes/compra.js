//Rutas para compras
const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

//api/compras
router.post('/',compraController.crearCompra);
router.get('/', compraController.obtenerCompra);


module.exports =  router;