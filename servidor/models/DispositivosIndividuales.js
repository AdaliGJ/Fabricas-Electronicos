const mongoose = require('mongoose');

const DispositivosIndividualesShema = mongoose.Schema({
    serie:{
        type: Number,
        required:true,
        uninque: true
    },
    idTipoDispositivo:{
        type: Number,
        required:true
    },
    empresa:{
        type: String,
        required:true
    },
    idInventario:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'electronico'
    },
    /*
    idInventario:{
        type:  mongoose.Schema.Types.ObjectId,
        required:true
    },*/
    fecha:{
        type: Date,
        default: Date.now()
    },
    fechaVentas:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('DispositivosIndividuales', DispositivosIndividualesShema, 'DispositivosIndividuales');