// iniciar servidor web 
// carrega as funcionalidades definidas no arquivo app.js e atribui a variavel app

const app = require('./app');
const PORT = process.env.PORT || 3000; // Caso não tenha porta especificada, considera a 3000

app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});