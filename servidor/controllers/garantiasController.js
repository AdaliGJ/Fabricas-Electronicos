const Garantia = require("../models/Garantia");

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