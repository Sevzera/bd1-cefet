import express from 'express';
const router = express.Router();
import * as model from '../model/modEstabelecimento.js';

// ROTAS ESTABELECIMENTO
router.post('/cadastro', (req, res) => {
    db.addEstabelecimento(req, res);
});
router.put('/atualizar', (req, res) => {
    db.updEstabelecimento(req, res);
});
router.delete('/remover', (req, res) => {
    db.rmvEstabelecimento(req, res);
});
router.get('/consultar', (req, res) => {
    db.getEstabelecimento(req, res);
});

export default router;