const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    usuario:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    password:{
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('Usuario', UsuarioSchema);