//Rutas para usuarios
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

//api/usuarios
router.post('/', usuariosController.crearUsuario);
router.get('/', usuariosController.obtenerUsuarios);
router.put('/:id', usuariosController.actualizarUsuario);
router.get('/:id', usuariosController.obtenerUsuario);
router.delete('/:id', usuariosController.borrarUsuario);

module.exports =  router;