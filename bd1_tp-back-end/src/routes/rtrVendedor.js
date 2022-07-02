import express from 'express';
const router = express.Router();
import * as control from '../controller/ctrlVendedor.js';

// ROTAS VENDEDOR
router.post('/cadastro', (req, res) => {
    control.addVendedor(req, res);
});
router.put('/atualizar', (req, res) => {
    control.updVendedor(req, res);
});
router.put('/remover', (req, res) => {
    control.rmvVendedor(req, res);
});
router.put('/consultar', (req, res) => {
    control.getVendedor(req, res);
});

export default router;