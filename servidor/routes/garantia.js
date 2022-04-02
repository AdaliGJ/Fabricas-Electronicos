//Rutas para garantias
const express = require('express');
const router = express.Router();
const garantiasController = require('../controllers/garantiasController');

//api/clientes
router.post('/',garantiasController.crearGarantia);
router.get('/', garantiasController.obtenerGarantias);
router.put('/:id', garantiasController.actualizarGarantia);
router.get('/:id', garantiasController.obtenerGarantia);
router.get('/dispositivo/:id', garantiasController.verificarGarantia);
//router.delete('/:id', clienteController.borrarCliente);

module.exports =  router;