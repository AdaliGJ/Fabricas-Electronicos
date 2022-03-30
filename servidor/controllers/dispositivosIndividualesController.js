const DispositivosIndividuales = require("../models/DispositivosIndividuales");
var generator = require('generate-serial-number');
 

exports.crearDispositivo = async (req, res) => {
    try{
        let dispositivo;
        //Creacion del dispositivo
        dispositivo = new DispositivosIndividuales(req.body);

        dispositivo.serie = generator.generate(20);

        
        await dispositivo.save();
        res.send(dispositivo);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.obtenerDispositivo = async (req,res)=>{
    try{
        let dispositivo = await DispositivosIndividuales.findById(req.params.id);
        if(!dispositivo){
            res.status(404).json({msg: 'No existe el cliente'})
        }
        res.json(dispositivo);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.obtenerPorInventario = async (req,res)=>{
    try{
        let dispositivo;
        dispositivo = new DispositivosIndividuales(req.body);

        const doc = await DispositivosIndividuales.find({idInventario:dispositivo.idInventario});
        res.json(doc);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.obtenerPorEmpresa = async (req,res)=>{
    try{
        let dispositivo;
        dispositivo = new DispositivosIndividuales(req.body);

        const doc = await DispositivosIndividuales.find({empresa:dispositivo.empresa});
        res.json(doc);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.obtenerPorTipoDispositivo = async (req,res)=>{
    try{
        let dispositivo;
        dispositivo = new DispositivosIndividuales(req.body);

        const doc = await DispositivosIndividuales.find({idTipoDispositivo:dispositivo.idTipoDispositivo});
        res.json(doc);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.actualizarDispositivo = async (req,res)=>{
    try{
        const { idTipoDispositivo, empresa, idInventario } = req.body;
        let dispositivo = await DispositivosIndividuales.find({_id:req.params.id});


        console.log(empresa);

        if(!dispositivo){
            res.status(404).json({msg: 'No existe el cliente'})
        }
        dispositivo.empresa = empresa;
        dispositivo.idTipoDispositivo = idTipoDispositivo;
        dispositivo.idInventario = idInventario;

        console.log(dispositivo.empresa);

        dispositivo = await DispositivosIndividuales.findOneAndUpdate({ _id:req.params.id}, 
            {
                idTipoDispositivo:dispositivo.idTipoDispositivo,
                empresa:dispositivo.empresa,
                idInventario:dispositivo.idInventario

            }, {new:true})

        console.log(dispositivo.empresa);

        res.json(dispositivo);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.borrarDispositivo = async (req,res)=>{
    try{
        let dispositivo = await DispositivosIndividuales.findById(req.params.id);
        if(!dispositivo){
            res.status(404).json({msg: 'No existe el cliente'})
        }

        await DispositivosIndividuales.findOneAndRemove({ _id: req.params.id})
        res.json({msg: "Cliente eliminado con exito"});

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}