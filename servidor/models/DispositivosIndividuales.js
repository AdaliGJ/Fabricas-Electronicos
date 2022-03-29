const mongoose = require('mongoose');

const DispositivosIndividualesShema = mongoose.Schema({
    serie:{
        type: Number,
        required:true
    },
    idTipoDispositivo:{
        type: Number,
        required:true
    },
    tienda:{
        type: String,
        required:true
    },
    idInventario:{
        type:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'electronicos' }],
        required:true
    },
    fecha:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('DispositivosIndividuales', DispositivosIndividualesShema, 'DispositivosIndividuales');