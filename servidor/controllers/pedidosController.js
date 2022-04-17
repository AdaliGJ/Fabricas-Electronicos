const Pedidos = require("../models/Pedidos");
const Clientes = require("../models/Cliente");
const Electronico = require("../models/Electronico");
const Cliente = require("../models/Cliente");
const DispositivosIndividuales = require("../models/DispositivosIndividuales");
var generator = require('generate-serial-number');

exports.crearPedido = async (req, res) => {
    try{
        let pedido;

        //Creamos nuestro pedido con los datos provenientes de ventas
        pedido = new Pedidos(req.body);

        //Se obtiene el json con la informacion del cliente
        let datosCliente = await Cliente.findById(pedido.cliente);

        //Obtenemos los dias de entrega
        let diasCliente = datosCliente.diasEntrega;

        //Se crea una variable de tipo fecha
        let date = new Date();
        let dias = diasCliente;

        //Se ingresan los dias en el pedido
        pedido.entrega = dias;

        //A la fecha actual se le suman los dias de entrega
        date.setDate(date.getDate() + dias);

        //Se ingresa la fecha en el pedido
        pedido.fechaEntrega = date;

        
        //Obtenemos el _id del pedido para ligarlo a los dispositivos generados
        let idPedido = pedido._id.toHexString();
        console.log(idPedido);
        //Cantidad de dispositivos a generar
        let count = pedido.cantidad;

        //Obtener las caracteristicas del intentario
        const jsonInventario = await Electronico.findById(pedido.idInventario);
        console.log(jsonInventario);
        const jsonCliente = await Clientes.findById(pedido.cliente);
        console.log(jsonCliente);

        
        for (var i = 0; i<count; i++){

            let dispositivo;
            //Creacion del dispositivo
            dispositivo = new DispositivosIndividuales();
            dispositivo.serie = generator.generate(20);
            dispositivo.categoria = jsonInventario.categoria;
            dispositivo.empresa = jsonCliente.empresa;
            dispositivo.idCliente = pedido.cliente;
            dispositivo.idInventario = pedido.idInventario; 
            dispositivo.idPedidos = idPedido;


            
            await dispositivo.save();
            console.log(dispositivo);
            pedido.dispositivos.push({"serie":dispositivo.serie});

        }

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


            }, {new:true});
        res.json(pedido);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}


exports.estadoPedido = async (req,res)=>{
    try{
        const { idPedidos, estado } = req.body;
        let pedido = await Pedidos.findById(idPedidos);

        if(!pedido){
            res.status(404).json({msg: 'No existe el elemento'})
        }
        
        pedido.estado = estado;

        pedido = await Pedidos.findOneAndUpdate ({ _id:idPedidos}, 
            {
                estado:pedido.estado
            }, {new:true});
        res.json(pedido);

    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}
