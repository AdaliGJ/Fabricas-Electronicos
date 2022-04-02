const mongoose = require('mongoose');

const ElectronicoSmartWatchSchema = mongoose.Schema({
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
    }
})
module.exports = mongoose.model('ElectronicoSmartWatch', ElectronicoSmartWatchSchema, 'electronicos');