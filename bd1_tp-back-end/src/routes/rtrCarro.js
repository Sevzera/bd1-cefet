import express from 'express';
const router = express.Router();
import * as model from '../model/modCarro.js';

// ROTAS CARRO
router.post('/cadastro', (req, res) => {
    model.addCarro(req, res);
});
router.put('/atualizar', (req, res) => {
    model.updCarro(req, res);
});
router.delete('/remover', (req, res) => {
    model.rmvCarro(req, res);
});
router.get('/consultar', (req, res) => {
    model.getCarro(req, res);
});

export default router;