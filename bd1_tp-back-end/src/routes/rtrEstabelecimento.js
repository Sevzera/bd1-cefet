import express from 'express';
const router = express.Router();
import * as control from '../controller/ctrlEstabelecimento.js';

// ROTAS ESTABELECIMENTO
router.post('/cadastro', (req, res) => {
    control.addEstabelecimento(req, res);
});
router.put('/atualizar', (req, res) => {
    control.updEstabelecimento(req, res);
});
router.put('/remover', (req, res) => {
    control.rmvEstabelecimento(req, res);
});
router.put('/consultar', (req, res) => {
    control.getEstabelecimento(req, res);
});

export default router;