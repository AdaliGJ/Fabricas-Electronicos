const mongoose = require('mongoose');

const GarantiaSchema = mongoose.Schema({
    idInventario:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'electronico'
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