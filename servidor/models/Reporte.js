const mongoose = require('mongoose');

const ReportesSchema = mongoose.Schema({
    modelo:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    fechaVentas:{
        type: Date,
        required: true
    },
    serie:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    precioVenta: {
        type: Number,
        default: Date.now()
    },
    empresa: {
        type: String,
        default: Date.now()
    },
    categoria: {
        type: String,
        default: Date.now()
    },
    marca: {
        type: String,
        default: Date.now()
    }

})
module.exports = mongoose.model('Reportes', ReportesSchema, 'reporteria');