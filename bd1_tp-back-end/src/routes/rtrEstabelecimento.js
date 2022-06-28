import express from 'express';
const router = express.Router();
import * as model from '../model/modEstabelecimento.js';

// ROTAS ESTABELECIMENTO
router.post('/cadastro', (req, res) => {
    model.addEstabelecimento(req, res);
});
router.put('/atualizar', (req, res) => {
    model.updEstabelecimento(req, res);
});
router.delete('/remover', (req, res) => {
    model.rmvEstabelecimento(req, res);
});
router.get('/consultar', (req, res) => {
    model.getEstabelecimento(req, res);
});

export default router;