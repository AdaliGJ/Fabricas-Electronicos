const mongoose = require('mongoose');
const Reporteria = require("../models/Reporteria");

const LastSeenSchema = mongoose.Schema({
    fechaConsulta:{
        type: Date,
        default: Date.now()
    },
    reportes:[]

})

module.exports = mongoose.model('lastSeen', LastSeenSchema, 'lastSeen');