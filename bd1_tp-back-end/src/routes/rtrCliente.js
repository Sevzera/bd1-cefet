import express from 'express';
const router = express.Router();
import * as control from '../controller/ctrlCliente.js';

// ROTAS CLIENTE
router.post('/cadastro', (req, res) => {
    control.addCliente(req, res);
});
router.put('/atualizar', (req, res) => {
    control.updCliente(req, res);
});
router.put('/remover', (req, res) => {
    control.rmvCliente(req, res);
});
router.put('/consultar', (req, res) => {
    control.getCliente(req, res);
});

export default router;