
// criando controladores de rota 

const { v4: uuidv4 } = require('uuid'); //importando funcao para gerar identificadores unicos 

const orders = require('../models/orderModel'); // importando o array orders que esta no modulo orderModel

//criando novo pedido 
//essa função recebe os dados do pedido no corpo da requisição req.body 
const createOrder = (req, res) =>{
    const {order, clientName, price} = req.body;
    const newOrder = { //cria objeto do pedido com id nome preço e status 
        id: uuidv4(), //gera ID unico 
        order,
        clientName,
        price,
        status: 'Em preparação'
    }; 
    orders.push(newOrder); //adiciona pedido no array 
    res.status(201).json(newOrder); //envia a resposta com o status criado 
}; 

//funcao para listar todos os pedidos 
const getAllOrders = (req, res) => { 
    res.json(orders);
};

//funcao para obter um pedido especifico pelo ID 
const getOrderById = (req, res) => {
    const { id } = req.params; // extrai o valor da propriedade id 
    const order = orders.find(order => order.id === id); //procura o Id extraido no array order
    res.json(order); //retorna o valor encontrado 
};

//Funcao para atualizar um pedido existente 
const updateOrder = (req,res) => {
    const { id } = req.params; // recupera o id 
    const { order, clientName, price, status } = req.body;
    const orderIndex = orders.findIndex(order => order.id === id); // encontra o indice do pedido com base no id 

    if (orderIndex !== -1) { 
        orders [orderIndex] = {...orders[orderIndex],order, clientName, price, status};
        res.json(orders[orderIndex]); // se o pedido for encontrado ele atualiza usando o operador spread (...)
    }else {
        res.status(404).json({error: 'Order not found'}); //se não for encontrado envia erro 404
    };
}

//funcao para deletar o pedido 
const deleteOrder = (req,res) => {
const { id } = req.params; // recupera o id 
const orderIndex = orders.findIndex(order => order.id === id); // encontra o indice do pedido com base no id 

if (orderIndex !== -1) {
    orders.splice(orderIndex, 1); //caso o pedido seja encontrado usa o metodo splice para remover do array 
    res.status(204).end(); //responta enviada - excluido com sucesso
} else {
    res.status(404).json({error: 'Order not found '}); //caso nao encontre envia erro 404
}
};

//funcao para atualizar o status do pedido
const updateOrderStatus = (req,res) => {
    const { id } = re.params;
    const orderIndex = orders.findIndex(order => order.id === id);

    if (orderIndex !== -1) {
        orders[orderIndex].status = 'Pronto';
        res.json(orders[orderIndex]);
    } else {
        res.status(404).json ({ error: 'Order not found'});
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
    updateOrderStatus
};


