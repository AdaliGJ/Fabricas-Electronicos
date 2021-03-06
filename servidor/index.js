const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creaicon servidor
const app = express();


//Conectamos a la BD
conectarDB();

app.use(cors());

app.use(express.json());
app.use('/api/electronico', require('./routes/electronico'));
app.use('/api/electronicoTelevisor', require('./routes/electronicoTelevisor'));
app.use('/api/electronicoSmartWatch', require('./routes/electronicoSmartWatch'));
app.use('/api/electronicoVideoGame', require('./routes/electronicoVideoGame'));
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/cliente', require('./routes/cliente'));
app.use('/api/dispositivosIndividuales', require('./routes/dispositivosIndividuales'));
app.use('/api/compra', require('./routes/compra'));
app.use('/api/reporte', require('./routes/reporte'));
app.use('/api/reporteria', require('./routes/reporteria'));
app.use('/api/lastSeen', require('./routes/lastSeen'));
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/garantia', require('./routes/garantia'));




app.set('port', process.env.PORT || 4000);

/*
const axios = require('axios');

axios.get('http://localhost:8080/Clientes/ObtenerTodos')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });



const axios = require('axios');

var nId = 1;
var nEstado = "entregado";
var nFecha = Date.now();

var stringPost = "http://localhost:8080/Pedidos/Estado?nId="+nId+"&nEstado="+nEstado+"nFecha"+nFecha;

axios.post(stringPost).then(res => {
  console.log(res);
})

*/

app.listen(4000,()=>{
    console.log("Funcionas");
})
