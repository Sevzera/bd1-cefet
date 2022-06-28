import express from 'express';
const router = express.Router();
import * as model from '../model/modVendedor.js';

// ROTAS VENDEDOR
router.post('/vendedor/cadastro', (req, res) => {
    model.addVendedor(req, res);
});
router.put('/vendedor/atualizar', (req, res) => {
    model.updVendedor(req, res);
});
router.delete('/vendedor/remover', (req, res) => {
    model.rmvVendedor(req, res);
});
router.get('/vendedor/consultar', (req, res) => {
    model.getVendedor(req, res);
});

export default router;