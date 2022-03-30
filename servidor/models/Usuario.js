const mongoose = require('mongoose');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UsuarioSchema = mongoose.Schema({
    usuario:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

UsuarioSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}

UsuarioSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}


module.exports = mongoose.model('Usuario', UsuarioSchema);

