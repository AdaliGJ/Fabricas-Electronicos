const LastSeen = require("../models/lastSeen");
const Reporteria = require("../models/Reporteria");
const DispositivosIndividuales = require("../models/DispositivosIndividuales");

exports.crearLastSeen = async (req, res) => {
    try{
        let lastSeen;
        //Creamos nuestro lastSeen
        lastSeen = new LastSeen();

        lastSeen.fechaConsulta = Date.now();
        
        const ultimaConsulta = await LastSeen.findOne().sort({fechaConsulta: -1});
        
        
        console.log(ultimaConsulta.fechaConsulta);
        console.log(lastSeen.fechaConsulta);

        const dipositivosVendidos = await DispositivosIndividuales.find({
            fechaVentas:{
                $gte:ultimaConsulta.fechaConsulta,
                $lte:lastSeen.fechaConsulta
            }
        })

        console.log(dipositivosVendidos);

        var count = Object.keys(dipositivosVendidos).length;

        for(var i = 0; i<count; i++){

            //console.log(dipositivosVendidos[i].serie);
            let strFind = dipositivosVendidos[i].serie;

            const reporte = await Reporteria.findOne({serie: strFind});

            console.log(reporte);

            if(reporte != null){
                //console.log(reporte._id);
                let stringId = reporte._id.toHexString();
                //console.log(stringId);
                lastSeen.reportes.push({"idReporteria":stringId});
                //console.log(lastSeen);
            }
        }

        /*
        dipositivosVendidos.forEach(async obj =>{
           //console.log(obj.serie);
           const reporte = await Reporteria.findOne({serie: obj.serie});

           if(reporte != null){
               //console.log(reporte._id);
               let stringId = reporte._id.toHexString();
               console.log(stringId);
               await lastSeen.reportes.push({"idReporteria":stringId});
               //console.log(lastSeen);

           }  
        });
        */


        

        //console.log(count);
        //console.log(lastSeen);
        

        await lastSeen.save();
        res.send(lastSeen);
    }catch(error){
        console.log(error);
        res.status(500),send("Hubo un error");
    }
}