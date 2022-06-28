import express from 'express';
const router = express.Router();
import * as db from '../database.js';

// ROTAS CLIENTE
router.post('/cadastro', (req, res) => {
    db.addCliente(req, res);
});
router.put('/atualizar', (req, res) => {
    db.updCliente(req, res);
});
router.delete('/remover', (req, res) => {
    db.rmvCliente(req, res);
});
router.get('/consultar', (req, res) => {
    db.getCliente(req, res);
});

export default router;