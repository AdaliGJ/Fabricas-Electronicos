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