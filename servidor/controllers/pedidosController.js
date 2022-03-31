const Pedidos = require("../models/Pedidos");
const Clientes = require("../models/Cliente");
const Electonico = require("../models/Electronico");
const Cliente = require("../models/Cliente");

exports.crearPedido = async (req, res) => {
    try{
        let pedido;

        //Creamos nuestro pedido
        pedido = new Pedidos(req.body);

        let datosCliente = await Cliente.findById(pedido.cliente);

        //let diasCliente = datosCliente.telefono;
        let diasCliente = 5;

        let date = new Date();
        
        let dias = diasCliente;

        pedido.entrega = dias;

        date.setDate(date.getDate() + dias);

        pedido.fechaEntrega = date;

        await pedido.save();
        res.send(pedido);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}

exports.obtenerPedidos= async (req,res)=>{
    try{
        const pedido= await Pedidos.find();
        res.json(pedido);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}