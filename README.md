
#Hamburgueria API 

API para gerenciar pedidos de uma hamburgueria. 

### Instalação 
1. Clone o repositório:
   ```sh
   git clone <url-do-repositorio>

2. Naveque até a pasta do projeto: 
    ```sh
    cd hamburgueria

3. Instale as dependências 
    ```sh
    npm install

### Uso 

1. Inicie o servidor: 
    ```sh
    npm start
2. A API está disponivel em https://localhost:3000. 

### Rotas

POST /order 
-> Cria um ovo pedido. 

GET /order 
-> Lista todos os pedidos. 

GET / order/ 
-> Obtém um pedido específico por ID. 

PUT /order/ 
-> Atualiza um pedido existente. 

DELETE /order/ 
-> Dele um pedido existente. 

PATCH /order/
-> Atualiza o status de um pedido para "Pronto". 


