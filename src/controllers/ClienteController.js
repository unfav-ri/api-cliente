const ClienteService = require("../services/ClienteService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let clientes = await ClienteService.buscarTodos();

    for (let i in clientes) {
      json.result.push({
        id: clientes[i].id,
        nome: clientes[i].nome_cliente,
        bancas: clientes[i].banca,
        valor_atual: clientes[i].valor_atual,
        user: clientes[i].user,
        password: clientes[i].password,
        role: clientes[i].role,
      });
    }

    res.json(json);
  },

  buscarUm: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let cliente = await ClienteService.buscarUm(id);

    if (cliente) {
      json.result = cliente;
    } else {
      json.error = "Cliente não encontrado";
    }

    res.json(json);
  },

  inserirCliente: async (req, res) => {
    let json = { error: "", result: {} };

    let nome_cliente = req.body.nome_cliente;
    let banca = req.body.banca;
    let valor_atual = req.body.valor_atual;
    let user = req.body.user;
    let password = req.body.password;
    let role = req.body.role;

    if (nome_cliente && user && password && role) {
      try {
        const id_cliente = await ClienteService.inserirCliente(nome_cliente);
        json.result.cliente_id = id_cliente;

        const id_login = await ClienteService.inserirLogin(
          id_cliente,
          user,
          password,
          role
        );
        json.result.login_id = id_login;

        if (banca && valor_atual) {
          const bancaRelacaoId = await ClienteService.inserirRelacaoBanca(
            id_cliente,
            id_login,
            banca,
            valor_atual
          );
          json.result.banca_relacao_id = bancaRelacaoId;
        }
      } catch (error) {
        json.error = "Erro ao inserir cliente.";
      }
    } else {
      json.error =
        "Certifique-se de fornecer nome do cliente, user, password e role.";
    }

    res.json(json);
  },

  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let nome_cliente = req.body.nome_cliente;
    let banca = req.body.banca;
    let valor_atual = req.body.valor_atual;
    let user = req.body.user;
    let password = req.body.password;
    let role = req.body.role;

    if (id) {
      try {
        await ClienteService.alterar(
          id,
          nome_cliente,
          banca,
          valor_atual,
          user,
          password,
          role
        );
        json.result = {
          id,
          nome_cliente,
          banca,
          valor_atual,
          user,
          password,
          role,
        };
      } catch (error) {
        json.error = "Erro ao atualizar informações do cliente.";
      }
    } else {
      json.error = "ID do cliente não especificado.";
    }

    res.json(json);
  },

  excluir: async (req, res) => {
    let json = { error: "", result: {} };

    await ClienteService.excluir(req.params.id);

    res.json(json);
  },
};
