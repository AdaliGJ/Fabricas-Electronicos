const Cliente = require("../models/Cliente");

exports.crearCliente = async (req, res) => {
    try{
        let cliente;
        cliente = new Cliente({
            empresa: req.body.empresa,
            encargado: req.body.encargado,
            telefono: req.body.telefono,
            correo: req.body.correo,
            pais: req.body.pais,
            fechaCreacion: req.body.fechaCreacion});

        //Creamos nuestro cliente
        cliente.password = await cliente.hashPassword(req.body.password); 
        await cliente.save();
        res.send(cliente);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

//obtener todos los clientes
exports.obtenerClientes = async (req,res)=>{
    try{
        const clientes= await Cliente.find();
        res.json(clientes);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.actualizarCliente = async (req,res)=>{
    try{
        const { empresa, encargado, telefono, correo, pais } = req.body;
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: 'No existe el cliente'})
        }
        cliente.empresa = empresa;
        cliente.encargado = encargado;
        cliente.telefono = telefono;
        cliente.correo = correo;
        cliente.pais = pais;

        cliente = await Cliente.findOneAndUpdate ({ _id:req.params.id}, cliente, {new:true})
        res.json(cliente);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

//obtener un solo cliente
exports.obtenerCliente = async (req,res)=>{
    try{
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: 'No existe el cliente'})
        }
        res.json(cliente);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.borrarCliente = async (req,res)=>{
    try{
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: 'No existe el cliente'})
        }

        await Cliente.findOneAndRemove({ _id: req.params.id})
        res.json({msg: "Cliente eliminado con exito"});

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.login = async (req,res)=>{
    const login={
        cliente: req.body.cliente,
        password: req.body.password
    }
    
    try{
        let cliente = await Usuario.findOne({correo: login.cliente});
        if(!cliente){
            res.status(404).json({msg: 'No existe el cliente'})
        }
        //res.json(cliente);

        let match = await cliente.compareUserPassword(login.password, cliente.password);
        console.log(login.password);
        console.log(cliente.password);
        if(match){
            if (match) {
                res.json(cliente);
                
            } 
        }else {
            res.json({_id:"error"});
        }

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}