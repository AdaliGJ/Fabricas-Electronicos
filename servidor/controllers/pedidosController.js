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

        let diasCliente = datosCliente.diasEntrega;

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
exports.actualizarPedido = async (req,res)=>{
    try{
        const { cliente, idInventario, estado, cantidad, entrega, fechaEntrega } = req.body;
        let pedido = await Pedidos.findById(req.params.id);

        if(!pedido){
            res.status(404).json({msg: 'No existe el elemento'})
        }
        pedido.cliente = cliente;
        pedido.idInventario = idInventario;
        pedido.estado = estado;
        pedido.cantidad = cantidad;
        pedido.entrega = entrega;
        pedido.fechaEntrega = fechaEntrega;

        pedido = await Pedidos.findOneAndUpdate ({ _id:req.params.id}, 
            {
                cliente:pedido.cliente,
                idInventario:pedido.idInventario,
                estado:pedido.estado,
                cantidad:pedido.cantidad,
                entrega:pedido.entrega,
                fechaEntrega:pedido.fechaEntrega

            }, {new:true})
        res.json(pedido);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}