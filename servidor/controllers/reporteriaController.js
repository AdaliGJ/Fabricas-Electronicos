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

        let date = new Date();

        const jsonDispositivo = await DispositivosIndividuales.findOneAndUpdate({serie:serie},{fechaVentas:date});

        console.log(jsonDispositivo);
        
        //let strIdInventario = jsonDispositivo.idInventario;
        //console.log(strIdInventario.toHexString());

        //let stringPrueba = mongoose.Types.ObjectId(strIdInventario.toHexString()).valueOf();
        //console.log(stringPrueba);

        reporteria.idInventario = jsonDispositivo.idInventario;
        const jsonInventario = await Electronico.findById(jsonDispositivo.idInventario);
        //console.log(jsonInventario);

        //let strIdPedidos = jsonDispositivo.idPedidos;
        reporteria.idPedidos = jsonDispositivo.idPedidos;
        const jsonPedidos = await Pedidos.findById(jsonDispositivo.idPedidos);
        //console.log(jsonPedidos);

        //let strCliente = jsonPedidos.cliente;
        reporteria.idCliente = jsonDispositivo.idCliente;
        const jsonCliente = await Cliente.findById(jsonDispositivo.idCliente);
        //console.log(jsonCliente);

        reporteria.serie = serie;
        reporteria.precioVenta = precioVenta;
        reporteria.categoria = jsonInventario.categoria;
        reporteria.empresa = jsonCliente.empresa;
        reporteria.modelo = jsonInventario.modelo;
        reporteria.pedido = jsonPedidos.idPedidoVentas;
        reporteria.fechaVentas = date;
        //reporteria.marca = jsonInventario.marca;
        //reporteria.modelo = jsonInventario.modelo;
        //reporteria.color = jsonInventario.color;
        //reporteria.fechaVentas = Date.now();



        await reporteria.save();
        res.send(reporteria);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}