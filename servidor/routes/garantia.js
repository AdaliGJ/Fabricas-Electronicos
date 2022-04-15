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
router.delete('/:id', garantiasController.borrarGarantia);
<<<<<<< HEAD
router.get('/devolver/:id', garantiasController.verificarGarantia);
=======
>>>>>>> 7c481d873ec26e8823873c2871075b80f7ff8519
//router.delete('/:id', clienteController.borrarCliente);

module.exports =  router;