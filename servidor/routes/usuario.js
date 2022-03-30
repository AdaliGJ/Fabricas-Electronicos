//Rutas para usuarios
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

//api/usuarios
router.post('/', usuariosController.crearUsuario);
router.get('/', usuariosController.obtenerUsuarios);
router.put('/:id', usuariosController.actualizarUsuario);
router.post('/login', usuariosController.login);
router.get('/:id', usuariosController.obtenerUsuario);
router.delete('/:id', usuariosController.borrarUsuario);
//router.get("/data", auth, usuariosController.defineDummyData)

module.exports =  router;