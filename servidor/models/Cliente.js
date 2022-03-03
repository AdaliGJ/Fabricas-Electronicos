const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    empresa:{
        type: String,
        required: true
    },
    encargado:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    pais:{
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Cliente', ClienteSchema);