import express from 'express';
const router = express.Router();
import * as control from '../controller/ctrlCarro.js';

// ROTAS CARRO
router.post('/cadastro', (req, res) => {
    control.addCarro(req, res);
});
router.put('/atualizar', (req, res) => {
    control.updCarro(req, res);
});
router.put('/remover', (req, res) => {
    control.rmvCarro(req, res);
});
router.put('/consultar', (req, res) => {
    control.getCarro(req, res);
});

export default router;