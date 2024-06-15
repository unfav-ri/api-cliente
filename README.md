# Projeto: API

API de CRUD - Create, Read, Update, Delete.

## Sobre o Projeto

Este código é uma API CRUD para um banco de dados genérico, utilizando DOTENV e JavaScript.

**Database**
- Localhost:3000
- Schema: db_clientes
- Tabelas: 
- cliente (id, nome_cliente)
- cliente_banca_relacao (id, id_cliente [chave estrangeira], id_login [chave estrangeira], banca, valor_atual)
- login (id, cliente_id [chave estrangeira], login, password, role)

## Testando o Request

**Não se esqueça de iniciar a API com:**

```sh
npm start

Utilizo o resttesttest.com como ferramenta para teste.

Endpoint: https://localhost:3000/api/(router)

server.use('/api', routes);

GET: /clientes, [buscar Todos os Clientes],
GET: /cliente/:id, [buscar Um Cliente],
POST: /cliente, [Inserir Cliente],
PUT: /cliente/:id, [Alterar Cliente],
DELETE: /cliente/:id, [Excluir Cliente],

Com esses endpoints, é possível realizar operações de leitura de todos os clientes, leitura de um cliente específico, inserção, alteração e exclusão de clientes.
```

# Tecnologias utilizadas

- **JavaScript**

## Autor

**R. Gonçalves**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/unic-ri/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/unic_ri)
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/210427541956198400)
