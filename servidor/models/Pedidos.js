const mongoose = require('mongoose');

const PedidosSchema = mongoose.Schema({


    fecha:{
        type: Date,
        default: Date.now()
    },
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'cliente'
    },
    idInventario:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'electronico'
    },
    cantidad:{
        type: Number,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    entrega:{
        type:Number,
        required:true
    },
    fechaEntrega:{
        type:Date,
        required: true
    }


})

module.exports = mongoose.model('pedidos', PedidosSchema, 'pedidos');