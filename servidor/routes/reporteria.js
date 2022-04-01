//Rutas para reporteria
const express = require('express');
const router = express.Router();
const reporteriaController = require('../controllers/reporteriaController');

//api/clientes
router.post('/',reporteriaController.crearReporte);
//router.get('/', clienteController.obtenerClientes);
//router.put('/:id', clienteController.actualizarCliente);
//router.get('/:id', clienteController.obtenerCliente);
//router.delete('/:id', clienteController.borrarCliente);
//router.post('/login', clienteController.login);

module.exports =  router;