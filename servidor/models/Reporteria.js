const mongoose = require('mongoose');

const ReporteriaSchema = mongoose.Schema({
    serie:{
        type: Number,
        required:true,
        uninque: true
    },
    empresa:{
        type: String,
        required:true
    },
    categoria:{
        type: String,
        required:true
    },
    modelo:{
        type: String,
        required: true
    },
    pedido:{
        type: String,
        required: true
    },
    precioVenta:{
        type: Number,
        required: true
    },
    fechaVentas:{
        type: Date,
        default: Date.now()
    },
    idInventario:{
        type: String,
        required: true
    },
    idCliente:{
        type: String,
        required: true
    },
    idPedidos:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('reporteria', ReporteriaSchema, 'reporteria');