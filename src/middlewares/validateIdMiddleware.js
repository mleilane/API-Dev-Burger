// define a validaçao de ID 

const orders = require("../models/orderModel"); //importa o modulo que contem o modelo de dados 

const validateIdMiddleware = (req, res, next) => {
  const { id } = req.params; // extrair o ID dos parametros de requisição 
  const order = orders.find(order => order.id === id); // busca elemento no array orders que possua o valor da propriedade  ID 
  if (!order) {
    return res.status(404).json({ error: 'Order not found' }); //se o id nao for localizado, retorna msg de erro 
  }
  next(); // se for encontrado segue para o proximo middleware ou rota 
};

module.exports = validateIdMiddleware; // permite utilizar a validateIdMiddleware em utros arquivos 
