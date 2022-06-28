import express from 'express';
const router = express.Router();
import * as model from '../model/modGeneral.js';

// DEMAIS ROTAS
router.post('/alugueis/novo', (req, res) => {
    model.iniciarAluguel(req, res);
});
router.put('/alugueis/:id/encerrar', (req, res) => {
    model.encerrarAluguel(req, res);
});
router.get('/vendedor/gerar-pagamentos', (req, res) => {
    model.gerarPagamentos(req, res);
});

export default router;