/* configurando a aplicacao express - importa bibliotecas - cria a instancia da aplicação - 
define middleware e monta rotas relacionadas aos pedidos */

const express = require('express'); //importando a biblioteca 
const orderRoutes = require('./routes/orderRoutes'); //  importa o modulo responsavel pelas rotas 
const logMiddleware = require('./middlewares/logMiddleware'); // importa o middleware de registro de logs 


const app = express(); // instancia do express

app.use(express.json());
app.use(logMiddleware);

app.use('/order', orderRoutes);

module.exports = app; // permite usar a  constante app em outros arquivos 