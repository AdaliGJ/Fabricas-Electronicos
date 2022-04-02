const mongoose = require('mongoose');

const GarantiaSchema = mongoose.Schema({
    idInventario:{
        type: String,
        required: true
    },
    mesesGarantia:{
        type: Number,
        requried: true
    },
    detalle:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('garantia', GarantiaSchema, 'garantia');