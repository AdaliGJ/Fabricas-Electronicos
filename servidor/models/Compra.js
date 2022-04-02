const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    nit:{
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    usuario:{
        type: String,
        required: true
    },
    idElectronico:{
        type: String ,
        required: false
    },
    
})
module.exports = mongoose.model('Compra', CompraSchema, 'compra');