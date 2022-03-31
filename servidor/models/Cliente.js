const mongoose = require('mongoose');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const ClienteSchema = mongoose.Schema({
    empresa:{
        type: String,
        required: true
    },
    encargado:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    pais:{
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    password:{
        type: String,
        required: true
    }
});

ClienteSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}

ClienteSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}

module.exports = mongoose.model('Cliente', ClienteSchema);