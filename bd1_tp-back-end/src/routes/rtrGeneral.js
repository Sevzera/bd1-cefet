import express from 'express';
const router = express.Router();
import * as control from '../controller/ctrlGeneral.js';

// DEMAIS ROTAS
router.post('/aluguel/novo', (req, res) => {
    control.iniciarAluguel(req, res);
});
router.put('/aluguel/:id/encerrar', (req, res) => {
    control.encerrarAluguel(req, res);
});
router.put('/vendedor/gerar-pagamentos', (req, res) => {
    control.gerarPagamentos(req, res);
});
router.put('/estabelecimento/consultar/vendedor', (req, res) => {
    control.vendedoresAssociados(req, res);
});
router.put('/cliente/consultar/aluguel', (req, res) => {
    control.alugueisAssociadosCliente(req, res);
});
router.put('/cliente/consultar/aluguel/contagem', (req, res) => {
    control.alugueisHistoricoCountCliente(req, res);
});
router.put('/carro/consultar/aluguel/historico', (req, res) => {
    control.alugueisHistoricoCarro(req, res);
});

export default router;