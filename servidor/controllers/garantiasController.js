const Garantia = require("../models/Garantia");
const DispositivosIndividuales = require("../models/DispositivosIndividuales");
const Pedidos = require("../models/Pedidos");
const Cliente = require("../models/Cliente");


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

        //Se trae el registro del dispositivo por medio del numero de serie
        const dispsitivo = await DispositivosIndividuales.findOne({serie:req.params.id});
        
        //Se obtiene el object id del inventario
        const stringIdInventario = dispsitivo.idInventario;
        
        //Se crea una variable fecha donde se guarda el momento de la adquisicion
        let fechaAdquisicion = new Date();
        fechaAdquisicion = dispsitivo.fechaVentas;

        //Se obtienen los datos de la garantia correspondiente al dispositivo
        const garantia = await Garantia.findOne({idInventario:stringIdInventario});

        let vigencia;

        if(garantia != null){
            //Se obtienen los meses de garantia
            const vencimiento = garantia.mesesGarantia;

            console.log(fechaAdquisicion);

            //Se arma la fecha en vencimiento en base a la fecha de adquisicion
            let fechaVencimiento = new Date();
            fechaVencimiento = fechaAdquisicion.setMonth(fechaAdquisicion.getMonth() + vencimiento);

            //Se crea la fecha de hoy
            let vigenciaFecha = new Date();

            
            console.log(fechaVencimiento);
            console.log(vigenciaFecha);


            //Se compara si la fecha de garantia ya expiro
            if(fechaVencimiento < vigenciaFecha){
                vigencia = {"Garantia":"Expirada"};
            } else {
                const devolucion = await DispositivosIndividuales.findOneAndUpdate({serie:req.params.id},
                    {
                        devolucionGarantia:true
        
                    }, {new:true});

                let idPedidoAnterior = devolucion.idPedidos;
                const infoPedido = await Pedidos.findById(idPedidoAnterior);
                let cliente = await Cliente.findById(infoPedido.cliente);

                

                vigencia = {"Garantia":"Devuelto",
                //"Registro":devolucion,
                "Pedido":infoPedido,
                "ip":cliente.ip};

            }
            //console.log(stringIdInventario);
        }else{
            vigencia = {"Garantia":"No disponible"};
        }

        
        
        
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