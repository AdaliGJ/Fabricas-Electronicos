const mongoose = require('mongoose');

const PedidosSchema = mongoose.Schema({


    fecha:{
        type: Date,
        default: Date.now()
    },
    cliente:{
        type: String,
        required: true
    },
    idInventario:{
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
    dispositivos:[{serie:String, _id:false}]


})

module.exports = mongoose.model('pedidos', PedidosSchema, 'pedidos');