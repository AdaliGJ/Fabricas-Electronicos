const Garantia = require("../models/Garantia");
const DispositivosIndividuales = require("../models/DispositivosIndividuales");


exports.crearGarantia = async (req, res) => {
    try{
        let garantia;

        //Creamos nuestra garantia
        garantia = new Garantia(req.body);
        await garantia.save();
        res.send(garantia);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.obtenerGarantias = async (req,res)=>{
    try{
        const garantia= await Garantia.find();
        res.json(garantia);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.obtenerGarantia = async (req,res)=>{
    try{
        let garantia= await Garantia.findById(req.params.id);
        
        if(!garantia){
            res.status(404).json({msg: 'No existe la garantia'})
        }
        
        res.json(garantia);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.actualizarGarantia = async (req,res)=>{
    try{
        const { idInventario, mesesGarantia, detalle } = req.body;
        let garantia = await Garantia.find({_id:req.params.id});

        if(!garantia){
            res.status(404).json({msg: 'No existe el cliente'})
        }
        garantia.idInventario = idInventario;
        garantia.mesesGarantia = mesesGarantia;
        garantia.detalle = detalle;

        garantia = await Garantia.findOneAndUpdate({ _id:req.params.id}, 
            {
                idInventario:garantia.idInventario,
                mesesGarantia:garantia.mesesGarantia,
                detalle:garantia.detalle

            }, {new:true})


        res.json(garantia);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.verificarGarantia = async (req,res)=>{
    try{

        const dispsitivo = await DispositivosIndividuales.findOne({serie:req.params.id});
        const stringIdInventario = dispsitivo.idInventario;
        let fechaAdquisicion = new Date();
        fechaAdquisicion = dispsitivo.fechaVentas;

        const garantia = await Garantia.findOne({idInventario:stringIdInventario});
        const vencimiento = garantia.mesesGarantia;

        console.log(fechaAdquisicion);

        let fechaVencimiento = new Date();
        fechaVencimiento = fechaAdquisicion.setMonth(fechaAdquisicion.getMonth() + vencimiento);

        let vigenciaFecha = new Date();



        
        console.log(fechaVencimiento);
        console.log(vigenciaFecha);

        let vigencia;

        if(fechaVencimiento < vigenciaFecha){
            vigencia = {"Garantia":"Expirada"};
        } else {
            vigencia = {"Garantia":"Vigente"};
        }
        //console.log(stringIdInventario);
        
        
        res.json(vigencia);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.borrarGarantia = async (req,res)=>{
    try{
        let garantia = await Garantia.findById(req.params.id);
        if(!garantia){
            res.status(404).json({msg: 'No existe el garantia'})
        }

        await Garantia.findOneAndRemove({ _id: req.params.id})
        res.json({msg: "Garantia eliminado con exito"});

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}