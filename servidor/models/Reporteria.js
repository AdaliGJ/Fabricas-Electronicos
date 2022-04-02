const mongoose = require('mongoose');

const ReporteriaSchema = mongoose.Schema({
    empresa:{
        type: String,
        required:true
    },
    categoria:{
        type: String,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    modelo: {
        type: String,
        default: Date.now()
    },
    color: {
        type: String,
        default: Date.now()
    },
    precioVenta:{
        type: Number,
        required: true
    },
    serie:{
        type: Number,
        required:true,
        uninque: true
    },
    fechaVentas:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('reporteria', ReporteriaSchema, 'reporteria');