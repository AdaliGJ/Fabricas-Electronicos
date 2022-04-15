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
    inventario:{
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
    }
})

module.exports = mongoose.model('reporteria', ReporteriaSchema, 'reporteria');