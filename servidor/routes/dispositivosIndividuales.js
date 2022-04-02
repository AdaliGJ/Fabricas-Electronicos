//Rutas para dispositivos individuales
const express = require('express');
const router = express.Router();
const controller = require('../controllers/dispositivosIndividualesController');

//api/clientes
router.post('/',controller.crearDispositivo);
router.get('/:id',controller.obtenerDispositivo);
router.get('/search/Inventario',controller.obtenerPorInventario);
router.get('/search/Categoria',controller.obtenerPorCategoria);
router.get('/search/Empresa',controller.obtenerPorEmpresa);
router.put('/:id',controller.actualizarDispositivo);
router.delete('/:id',controller.borrarDispositivo);


module.exports =  router;