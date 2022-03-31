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
app.use('/api/cliente', require('./routes/cliente'));
app.use('/api/dispositivosIndividuales', require('./routes/dispositivosIndividuales'));
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/garantia', require('./routes/garantia'));
app.use('/api/usuario', require('./routes/usuario'));




app.listen(4000,()=>{
    console.log("Funcionas");
})
