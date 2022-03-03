const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creaicon servidor
const app = express();

//Conectamos a la BD
conectarDB();

app.use(cors());

app.use(express.json());
app.use('/api/cliente', require('./routes/cliente'));


app.listen(4000,()=>{
    console.log("Funcionas");
})