//Rutas para electronicos
const express = require('express');
const router = express.Router();
const electronicoController = require('../controllers/electronicoController');

//api/electronicos
router.post('/',electronicoController.crearElectronico);
router.get('/', electronicoController.obtenerElectronicos);
router.put('/:id', electronicoController.actualizarElectronico);
router.get('/:id', electronicoController.obtenerElectronico);
router.delete('/:id', electronicoController.borrarElectronico);

module.exports =  router;