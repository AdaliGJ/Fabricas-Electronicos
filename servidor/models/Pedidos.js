const mongoose = require('mongoose');

const PedidosSchema = mongoose.Schema({


    fecha:{
        type: Date,
        default: Date.now()
    },
    idPedidoVentas:{
        type: Number,
        required: true
    },
    idInventarioVentas:{
        type: Number,
        required: true
    },
    cliente:{
        type: String,
        required: true
    },
    empresa:{
        type: String,
        required: true

    },
    idInventario:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    estado:{
        type: String,
        default: "generado"
    },
    entrega:{
        type:Number,
        required:true
    },
    fechaEntrega:{
        type:Date,
        required: true
    },
    pedidoGarantia:{
        type:Boolean,
        default: false
    },
    dispositivos:[{serie:String, _id:false}]


})

module.exports = mongoose.model('pedidos', PedidosSchema, 'pedidos');