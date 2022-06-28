import express from 'express';
const router = express.Router();
import * as model from '../model/modCarro.js';

// ROTAS CARRO
router.post('/cadastro', (req, res) => {
    db.addCarro(req, res);
});
router.put('/atualizar', (req, res) => {
    db.updCarro(req, res);
});
router.delete('/remover', (req, res) => {
    db.rmvCarro(req, res);
});
router.get('/consultar', (req, res) => {
    db.getCarro(req, res);
});

export default router;