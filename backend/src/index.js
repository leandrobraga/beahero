const express = require('express');
const cors = require('cors');

const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json()) //Ativa o express para trabalar com requisições json
//Colocar o routes abaixo do JSON
app.use(routes);

app.listen(3333);