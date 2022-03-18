const Electronico = require("../models/Electronico");

exports.crearElectronico = async (req, res) => {
    try{
        let electronico;

        //Creamos nuestro electronico
        electronico = new Electronico(req.body);
        await electronico.save();
        res.send(electronico);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

//obtener todos los electronicos
exports.obtenerElectronicos = async (req,res)=>{
    try{
        const electronicos= await Electronico.find();
        res.json(electronicos);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.actualizarElectronico = async (req,res)=>{
    try{
        const { empresa, encargado, telefono, correo, pais } = req.body;
        let electronico = await Electronico.findById(req.params.id);

        if(!electronico){
            res.status(404).json({msg: 'No existe el electronico'})
        }
        electronico.empresa = empresa;
        electronico.encargado = encargado;
        electronico.telefono = telefono;
        electronico.correo = correo;
        electronico.pais = pais;

        electronico = await Electronico.findOneAndUpdate ({ _id:req.params.id}, electronico, {new:true})
        res.json(electronico);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

//obtener un solo electronico
exports.obtenerElectronico = async (req,res)=>{
    try{
        let electronico = await Electronico.findById(req.params.id);
        if(!electronico){
            res.status(404).json({msg: 'No existe el electronico'})
        }
        res.json(electronico);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.borrarElectronico = async (req,res)=>{
    try{
        let electronico = await Electronico.findById(req.params.id);
        if(!electronico){
            res.status(404).json({msg: 'No existe el electronico'})
        }

        await Electronico.findOneAndRemove({ _id: req.params.id})
        res.json({msg: "Electronico eliminado con exito"});

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}