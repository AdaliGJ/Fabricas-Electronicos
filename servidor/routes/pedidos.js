//Rutas para pedidos
const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

//api/pedidos
router.post('/',pedidosController.crearPedido);
router.get('/', pedidosController.obtenerPedidos);
router.put('/:id', pedidosController.actualizarPedido);
router.post('/estado/', pedidosController.estadoPedido);
//router.get('/:id', pedidosController.obtenerPedido);
//router.delete('/:id', pedidosController.borrarPedido);
router.post('/enviar/', pedidosController.enviarPedido);

module.exports =  router;