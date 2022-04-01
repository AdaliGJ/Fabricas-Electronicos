const Reporteria = require("../models/Reporteria");
const Pedidos = require("../models/Pedidos");
const Cliente = require("../models/Cliente");
const mongoose = require('mongoose');
const DispositivosIndividuales = require("../models/DispositivosIndividuales");
const Electronico = require("../models/Electronico");

exports.crearReporte = async (req, res) => {
    try{
        
        const {serie ,precioVenta} = req.body;
        
        let reporteria;
        //Creacion del reporte vacio
        reporteria = new Reporteria();

        const jsonDispositivo = await DispositivosIndividuales.findOne({serie:serie});

        console.log(jsonDispositivo);
        
        let strIdInventario = jsonDispositivo.idInventario;
        //console.log(strIdInventario.toHexString());

        //let stringPrueba = mongoose.Types.ObjectId(strIdInventario.toHexString()).valueOf();
        //console.log(stringPrueba);

        const jsonInventario = await Electronico.findById(strIdInventario.toHexString());
        console.log(jsonInventario);

        let strIdPedidos = jsonDispositivo.idPedidos;
        const jsonPedidos = await Pedidos.findById(strIdPedidos.toHexString());
        console.log(jsonPedidos);

        let strCliente = jsonPedidos.cliente;
        const jsonCliente = await Cliente.findById(strCliente.toHexString());
        console.log(jsonCliente);

        reporteria.serie = serie;
        reporteria.precioVenta = precioVenta;
        reporteria.empresa = jsonCliente.empresa;
        reporteria.categoria = jsonInventario.categoria;
        reporteria.marca = jsonInventario.marca;
        reporteria.modelo = jsonInventario.modelo;
        reporteria.color = jsonInventario.color;
        reporteria.fechaVentas = Date.now();



        await reporteria.save();
        res.send(reporteria);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}