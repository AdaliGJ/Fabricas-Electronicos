const mongoose = require('mongoose');

const ElectronicoSchema = mongoose.Schema({
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
    resolucion: {
        type: String,
        default: Date.now()
    },
    bits: {
        type: String,
        default: Date.now()
    },
    pulgadas: {
        type: String,
        default: Date.now()
    },
    hdmi: {
        type: String,
        default: Date.now()
    },
    pulgadasReloj: {
        type: String,
        default: Date.now()
    },
    sistemaOperativo: {
        type: String,
        default: Date.now()
    },
    ram: {
        type: String,
        default: Date.now()
    },
    memoria: {
        type: String,
        default: Date.now()
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
module.exports = mongoose.model('Electronico', ElectronicoSchema);