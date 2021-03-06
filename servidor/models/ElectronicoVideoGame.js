const mongoose = require('mongoose');

const ElectronicoVideoGameSchema = mongoose.Schema({
    idInventario:{
        type: Number,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    existencia:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: Date.now()
    },
    modelo: {
        type: String,
        default: Date.now()
    },
    descripcion: {
        type: String,
        default: Date.now()
    },
    diasEnvio:{
        type: Number,
        default: 5
    },
    maximoJugadores: {
        type: String,
        default: Date.now()
    },
    graficos: {
        type: String,
        default: Date.now()
    },
    consola: {
        type: String,
        default: Date.now()
    }
})
module.exports = mongoose.model('ElectronicoVideoGame', ElectronicoVideoGameSchema, 'electronicos');