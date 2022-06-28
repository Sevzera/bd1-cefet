import express from 'express';
const router = express.Router();
import * as db from '../database.js';

// DEMAIS ROTAS
router.post('/alugueis/novo', (req, res) => {
    db.iniciarAluguel(req, res);
});
router.put('/alugueis/:id/encerrar', (req, res) => {
    db.encerrarAluguel(req, res);
});
router.get('/vendedor/gerar-pagamentos', (req, res) => {
    db.gerarPagamentos(req, res);
});

export default router;