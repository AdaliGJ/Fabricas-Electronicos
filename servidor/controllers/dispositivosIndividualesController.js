const DispositivosIndividuales = require("../models/DispositivosIndividuales");


exports.crearDispositivo = async (req, res) => {
    try{
        let dispositivo;
        //Creacion del dispositivo
        dispositivo = new DispositivosIndividuales(req.body);
        await dispositivo.save();
        res.send(dispositivo);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}