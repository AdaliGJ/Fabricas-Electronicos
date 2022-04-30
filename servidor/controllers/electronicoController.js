const Electronico = require("../models/Electronico");

const ElectronicoTelevisor = require("../models/ElectronicoTelevisor");
const ElectronicoSmartWatch = require("../models/ElectronicoSmartWatch");
const ElectronicoVideoGame = require("../models/ElectronicoVideoGame");

const Garantia = require("../models/Garantia");

exports.crearElectronico = async (req, res) => {
    try{
        let electronico;
        console.log(req.body);
        //Creamos nuestro electronico
        electronico = new Electronico(req.body);
        await electronico.save();

        let idInventario = electronico._id.toHexString();
        let garantia;

        //Creamos nuestra garantia
        garantia = new Garantia();
        garantia.idInventario = idInventario;
        garantia.mesesGarantia = (req.body.mesesGarantia);
        garantia.detalle = (req.body.detalle);
        await garantia.save();

        res.send(electronico);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.crearElectronicoTelevisor = async (req, res) => {
    try{
        let electronico;
        //Creamos nuestro electronico
        electronico = new ElectronicoTelevisor(req.body);
        await electronico.save();

        let idInventario = electronico._id.toHexString();
        let garantia;

        //Creamos nuestra garantia
        garantia = new Garantia();
        garantia.idInventario = idInventario;
        garantia.mesesGarantia = (req.body.mesesGarantia);
        garantia.detalle = (req.body.detalle);
        await garantia.save();


        res.send(electronico);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.crearElectronicoSmartWatch = async (req, res) => {
    try{
        let electronico;
        //Creamos nuestro electronico
        electronico = new ElectronicoSmartWatch(req.body);
        await electronico.save();

        let idInventario = electronico._id.toHexString();
        let garantia;

        //Creamos nuestra garantia
        garantia = new Garantia();
        garantia.idInventario = idInventario;
        garantia.mesesGarantia = (req.body.mesesGarantia);
        garantia.detalle = (req.body.detalle);
        await garantia.save();

        res.send(electronico);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.crearElectronicoVideoGame = async (req, res) => {
    try{
        let electronico;
        //Creamos nuestro electronico
        electronico = new ElectronicoVideoGame(req.body);
        await electronico.save();

        let idInventario = electronico._id.toHexString();
        let garantia;

        //Creamos nuestra garantia
        garantia = new Garantia();
        garantia.idInventario = idInventario;
        garantia.mesesGarantia = (req.body.mesesGarantia);
        garantia.detalle = (req.body.detalle);
        await garantia.save();


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
        const { categoria, marca, existencia, precio, color, modelo, descripcion } = req.body;
        let electronico = await Electronico.findById(req.params.id);

        if(!electronico){
            res.status(404).json({msg: 'No existe el electronico'})
        }
        electronico.categoria = categoria;
        electronico.marca = marca;
        electronico.existencia = existencia;
        electronico.precio = precio;
        electronico.color = color;
        electronico.modelo = modelo;
        electronico.descripcion = descripcion;

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