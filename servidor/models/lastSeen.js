const mongoose = require('mongoose');

const LastSeenSchema = mongoose.Schema({
    fechaConsulta:{
        type: Date,
        default: Date.now()
    },
    reportes:[{idReporteria:String, _id:false}]

})

module.exports = mongoose.model('lastSeen', LastSeenSchema, 'lastSeen');