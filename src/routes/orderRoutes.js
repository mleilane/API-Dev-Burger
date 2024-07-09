
const express = require('express'); // importando o express

// importa funções do controlador de pedidos "orderController" - Criar - ler - atualizar e excluir pedidos 
const {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
    updateOrderStatus
} = require('../controllers/orderController');

// verificar se o ID informado nas requisiçoes é valido antes de processar a requisição 
const validateIdMiddleware = require('../middlewares/validateIdMiddleware'); // importa o middleware de validação de id
const router = express.Router(); // criando o router para definir as rotas especificas para pedidos 

router.post('/',createOrder); // criar novo pedido 
router.get('/', getAllOrders); // obter - listar todos os pedidos 
router.get('/:id', validateIdMiddleware, getOrderById); // usa o middleware para validar o id, depois obter pedido especifico por ID 
router.put('/:id', validateIdMiddleware, updateOrder);  // usa middleware para validar o ID, depois chama a funcao para atualizar o pedido pelo ID 
router.delete( '/:id', validateIdMiddleware, deleteOrder); // usa middleware para validar o ID, depois chama a funcao para excuir um pedido
router.patch('/:id', validateIdMiddleware, updateOrderStatus);  // usa middleware para validar o ID, depois chama a funcao para atualizar o status do pedido

module.exports = router; // exporta o roteador para que possa ser usado em outras aplicações 