const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT c.id, c.nome_cliente, r.banca, r.valor_atual, l.user, l.password, l.role " +
          "FROM cliente c " +
          "LEFT JOIN cliente_banca_relacao r ON c.id = r.cliente_id " +
          "LEFT JOIN login l ON c.id = l.cliente_id",
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },

  buscarUm: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT c.id, c.nome_cliente, cb.banca, cb.valor_atual, l.user, l.password, l.role " +
          "FROM cliente c " +
          "LEFT JOIN cliente_banca_relacao cb ON c.id = cb.cliente_id " +
          "LEFT JOIN login l ON c.id = l.cliente_id " +
          "WHERE c.id = ?",
        [id],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            const buscarUm = {
              id: results[0].id,
              nome_cliente: results[0].nome_cliente,
              bancas: [],
            };

            for (const row of results) {
              if (row.banca) {
                buscarUm.bancas.push({
                  banca: row.banca,
                  valor_atual: row.valor_atual,
                });
              }
            }

            buscarUm.user = results[0].user;
            buscarUm.password = results[0].password;
            buscarUm.role = results[0].role;

            aceito(buscarUm);
          } else {
            aceito(null);
          }
        }
      );
    });
  },

  inserirCliente: (nome_cliente) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO db_clientes.cliente (nome_cliente) VALUES (?)",
        [nome_cliente],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertId);
        }
      );
    });
  },

  inserirRelacaoBanca: (cliente_id, id_login, banca, valor_atual) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO cliente_banca_relacao (cliente_id, id_login, banca, valor_atual) VALUES (?, ?, ?, ?)",
        [cliente_id, id_login, banca, valor_atual],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertId);
        }
      );
    });
  },

  inserirLogin: (cliente_id, user, password, role) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO login (cliente_id, user, password, role) VALUES (?, ?, ?, ?)",
        [cliente_id, user, password, role],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertId);
        }
      );
    });
  },

  alterar: (id, nome_cliente, banca, valor_atual, user, password, role) => {
    return new Promise((aceito, rejeitado) => {
      const sql = `
        UPDATE cliente
        SET nome_cliente = ?
        WHERE id = ?;
      `;

      db.query(sql, [nome_cliente, id], (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }

        const sqlBanca = `
          UPDATE cliente_banca_relacao
          SET banca = ?, valor_atual = ?
          WHERE cliente_id = ?;
        `;

        db.query(sqlBanca, [banca, valor_atual, id], (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }

          const sqlLogin = `
            UPDATE login
            SET user = ?, password = ?, role = ?
            WHERE cliente_id = ?;
          `;

          db.query(sqlLogin, [user, password, role, id], (error, results) => {
            if (error) {
              rejeitado(error);
              return;
            }
            aceito(results);
          });
        });
      });
    });
  },

  excluir: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM db_clientes.cliente WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
