// req -> objeto de requisição 
// res -> objeto de resposta 
//next -> função de callback, indica ao middleware que a execução pode continuar 

const logMiddleware = (req, res, next) => {
    console.log(`[${req.method}] - ${req.url}`);
    next();
};

//req.method -> representa o metodo HTTP da requisição (GEt, POST, PUT, DELETE)
//req.url -> representa a URL da requisicao 
//next -> indica que o processo do middleware terminou e pode seguir 

module.exports = logMiddleware; // permite usar o logMiddleware em outros arquivos 





