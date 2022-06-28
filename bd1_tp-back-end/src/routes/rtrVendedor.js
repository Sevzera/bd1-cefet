import express from 'express';
const router = express.Router();
import * as model from '../model/modVendedor.js';

// ROTAS VENDEDOR
router.post('/vendedor/cadastro', (req, res) => {
    db.addVendedor(req, res);
});
router.put('/vendedor/atualizar', (req, res) => {
    db.updVendedor(req, res);
});
router.delete('/vendedor/remover', (req, res) => {
    db.rmvVendedor(req, res);
});
router.get('/vendedor/consultar', (req, res) => {
    db.getVendedor(req, res);
});

export default router;