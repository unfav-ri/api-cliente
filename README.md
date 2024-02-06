# Projeto: API

API de CRUD - Create, Read, Update, Delete.

# Sobre o projeto

Esse código é uma API CRUD para um banco de dados qualquer, utilizando DOTENV e JS.
Data Base - Localhost:3000 - schema: db_clientes - Tabelas: cliente (id, nome_cliente), cliente_banca_relacao (id, id_cliente[chave estrangeira], id_login[chave estrangeira], banca, valor_atual), login (id, cliente_id [chave estrangeira], login, password, role)

# Testando o request

### Não se esqueça de iniciar a API com: npm start

Utilizo o [resttesttest.com](https://resttesttest.com/ "request test") como ferramenta para teste

Endpoint: https://localhost:3000/api/(router)</br>

server.use('/api', routes);</br>

Method (com as rotas):</br>
GET: /clientes, [buscar Todos os Clientes],</br>
GET: /cliente/:id, [buscar Um Cliente],</br>
POST: /cliente, [Inserir Cliente],</br>
PUT: /cliente/:id, [Alterar Cliente],</br>
DELETE: /cliente/:id, [Excluir Cliente],

Com esses dados é possível ler todos, ler um, inserir, alterar e deletar o cliente desejado.

# Tecnologias utilizadas

- JavaScript

# Autor

R. Gonçalves
https://www.linkedin.com/in/rgonsa/
