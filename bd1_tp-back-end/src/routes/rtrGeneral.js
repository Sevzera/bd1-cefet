import express from 'express';
const router = express.Router();
import * as control from '../controller/ctrlGeneral.js';

// DEMAIS ROTAS
router.post('/alugueis/novo', (req, res) => {
    control.iniciarAluguel(req, res);
});
router.put('/alugueis/:id/encerrar', (req, res) => {
    control.encerrarAluguel(req, res);
});
router.put('/vendedor/gerar-pagamentos', (req, res) => {
    control.gerarPagamentos(req, res);
});

export default router;