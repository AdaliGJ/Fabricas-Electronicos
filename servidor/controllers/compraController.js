const Compra = require("../models/Compra");


exports.crearCompra = async (req, res) => {
    try{
        let compra;
        //Creamos nuestro compra
        compra = new Compra(req.body);
        await compra.save();
        res.send(compra);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

//obtener todos los clientes
exports.obtenerCompra = async (req,res)=>{
    try{
        const compra= await Compra.find();
        res.json(compra);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.borrarCompra = async (req,res)=>{
    try{
        let compra = await Compra.findById(req.params.id);
        if(!compra){
            res.status(404).json({msg: 'No existe el compra'})
        }

        await Compra.findOneAndRemove({ _id: req.params.id})
        res.json({msg: "Compra eliminado con exito"});

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}