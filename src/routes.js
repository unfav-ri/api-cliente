const express = require("express");
const router = express.Router();

const ClienteController = require("./controllers/ClienteController");

router.get("/clientes", ClienteController.buscarTodos);
router.get("/cliente/:id", ClienteController.buscarUm);
router.post('/cliente', ClienteController.inserirCliente);
router.put('/cliente/:id', ClienteController.alterar);
router.delete('/cliente/:id',ClienteController.excluir);

module.exports = router;
