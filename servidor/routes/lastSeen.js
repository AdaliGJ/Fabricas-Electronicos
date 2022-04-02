//Rutas para lastSeen
const express = require('express');
const router = express.Router();
const lastSeenController = require('../controllers/lastSeenController');

//api/lastSeen
router.post('/',lastSeenController.crearLastSeen);
//router.get('/', clienteController.obtenerClientes);
//router.put('/:id', clienteController.actualizarCliente);
router.get('/:id', lastSeenController.obtenerReporteria);
//router.delete('/:id', clienteController.borrarCliente);
//router.post('/login', clienteController.login);

module.exports =  router;