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
        const { entrega } = req.body;
        let pedido = await Pedidos.findById(req.params.id);

        console.log(pedido  );
        if(!pedido){
            res.status(404).json({msg: 'No existe el elemento'})
        }
        pedido.entrega = entrega;

        pedido = await Pedidos.findOneAndUpdate ({ _id:req.params.id}, 
            {

                estado:"entregado"


            }, {new:true})
        res.json(pedido);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
exports.obtenerPedido = async (req,res)=>{
    try{
        let pedido = await Pedido.findById(req.params.id);
        if(!pedido){
            res.status(404).json({msg: 'No existe el pedido'})
        }
        res.json(pedido);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
