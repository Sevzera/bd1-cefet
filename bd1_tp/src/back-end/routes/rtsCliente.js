import express from 'express';
const router = express.Router();
import * as model from '../model/modCliente.js';

// ROTAS CLIENTE
router.post('/cadastro', (req, res) => {
    model.addCliente(req, res);
});
router.put('/atualizar', (req, res) => {
    model.updCliente(req, res);
});
router.delete('/remover', (req, res) => {
    model.rmvCliente(req, res);
});
router.get('/consultar', (req, res) => {
    model.getCliente(req, res);
});

export default router;