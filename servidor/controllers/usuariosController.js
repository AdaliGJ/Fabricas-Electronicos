const Usuario = require("../models/Usuario");


exports.crearUsuario = async (req, res) => {
    try{
        let usuario;
        usuario = new Usuario({
            usuario: req.body.usuario,
            nombre: req.body.nombre});

        usuario.password = await usuario.hashPassword(req.body.password);   
        await usuario.save();
        res.send(usuario);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

//obtener todos los usuarios
exports.obtenerUsuarios = async (req,res)=>{
    try{
        const usuarios= await Usuario.find();
        res.json(usuarios);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.actualizarUsuario = async (req,res)=>{
    try{
        const { user, nombre, password } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: 'No existe el usuario'})
        }
        usuario.usuario = user;
        usuario.nombre = nombre;
        usuario.password = password;


        usuario = await Usuario.findOneAndUpdate ({ _id:req.params.id}, usuario, {new:true})
        res.json(usuario);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

//obtener un solo usuario
exports.obtenerUsuario = async (req,res)=>{
    try{
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }
        res.json(usuario);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.login = async (req,res)=>{
    const login={
        usuario: req.body.usuario,
        password: req.body.password
    }
    
    try{
        let usuario = await Usuario.findOne({usuario: login.usuario});
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }
        //res.json(usuario);

        let match = await usuario.compareUserPassword(login.password, usuario.password);
        console.log(login.password);
        console.log(usuario.password);
        if(match){
            if (match) {
                res.json(usuario);
                
            } 
        }else {
            res.json({_id:"error"});
        }

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.borrarUsuario = async (req,res)=>{
    try{
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }

        await Usuario.findOneAndRemove({ _id: req.params.id})
        res.json({msg: "Usuario eliminado con exito"});

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.defineDummyData = async (req, res) => {
    try{
    res.json({
        message: "Hello World"
    })
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}