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
