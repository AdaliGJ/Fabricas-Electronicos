const lastSeen = require("../models/lastSeen");
const Reporte = require("../models/Reporte");



//obtener todos los reportes
exports.obtenerReportes = async (req,res)=>{
    try{
        const reportes= await Reporte.find();
        res.json(reportes);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
//obtener un solo reporte
exports.obtenerReporte = async (req,res)=>{
    try{
        let reporte = await Reporte.findById(req.params.id);
        if(!reporte){
            res.status(404).json({msg: 'No existe el reporte'})
        }
        res.json(reporte);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
