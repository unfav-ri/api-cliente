# Projeto: API

API de CRUD - Create, Read, Update, Delete.

# Sobre o projeto

Esse código é uma API CRUD para um banco de dados qualquer, utilizando DOTENV e JS.
Data Base - Localhost:3000 - schema: db_clientes - Tabelas: cliente (id, nome_cliente), cliente_banca_relacao (id, id_cliente[chave estrangeira], id_login[chave estrangeira], banca, valor_atual), login (id, cliente_id [chave estrangeira], login, password, role)

# Testando o request

Utilizo o [resttesttest.com](https://resttesttest.com/ "request test") como ferramenta para teste

GET: router.get("/clientes", ClienteController.buscarTodos);
GET: router.get("/cliente/:id", ClienteController.buscarUm);
POST: router.post('/cliente', ClienteController.inserirCliente);
PUT: router.put('/cliente/:id', ClienteController.alterar);
DELETE: router.delete('/cliente/:id',ClienteController.excluir);

Add parameter - Parameter Name (dado solicitado) / Parameter Value (valor solicitado)

Com esses dados é possível ler todos, ler um, inserir, alterar e deletar o cliente desejado.

# Tecnologias utilizadas

- JavaScript

# Autor

R. Gonçalves
https://www.linkedin.com/in/rgonsa/
