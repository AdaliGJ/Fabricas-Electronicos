//Rutas para dispositivos individuales
const express = require('express');
const router = express.Router();
const controller = require('../controllers/dispositivosIndividualesController');

//api/clientes
router.post('/',controller.crearDispositivo);
router.get('/Inventario',controller.obtenerPorInventario);
router.get('/TipoDispositivo',controller.obtenerPorTipoDispositivo);
router.get('/Empresa',controller.obtenerPorEmpresa);


module.exports =  router;