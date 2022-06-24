import express from 'express';
import * as db from './database.js';

(async () => {
    const server = express();
    server.use(express.json());
    const port = 5000;
    await db.connect();

    // ROTAS CLIENTE
    server.post('/cliente/cadastro', (req, res) => {
        db.addCliente(req, res);
    });

    server.put('/cliente/atualizar', (req, res) => {
        db.updCliente(req, res);
    });

    server.delete('/cliente/remover', (req, res) => {
        db.rmvCliente(req, res);
    });

    server.get('/cliente/consultar', (req, res) => {
        db.getCliente(req, res);
    });

    // ROTAS VENDEDOR
    server.post('/vendedor/cadastro', (req, res) => {
        db.addVendedor(req, res);
    });

    server.put('/vendedor/gerar-pagamentos', (req, res) => {
        db.gerarPagementos(req, res);
    });
    server.put('/vendedor/atualizar', (req, res) => {
        db.updVendedor(req, res);
    });

    server.delete('/vendedor/remover', (req, res) => {
        db.rmvVendedor(req, res);
    });

    server.get('/vendedor/consultar', (req, res) => {
        db.getVendedor(req, res);
    });

    // ROTAS CARRO
    server.post('/frota/cadastro', (req, res) => {
        db.addCarro(req, res);
    });

    server.put('/frota/atualizar', (req, res) => {
        db.updCarro(req, res);
    });

    server.delete('/frota/remover', (req, res) => {
        db.rmvCarro(req, res);
    });

    server.get('/frota/consultar', (req, res) => {
        db.getCarro(req, res);
    });

    // ROTAS LOJA
    server.post('/loja/cadastro', (req, res) => {
        db.addLoja(req, res);
    });

    server.put('/loja/atualizar', (req, res) => {
        db.updLoja(req, res);
    });

    server.delete('/loja/remover', (req, res) => {
        db.rmvLoja(req, res);
    });

    server.get('/loja/consultar', (req, res) => {
        db.getLoja(req, res);
    });

    // ROTAS ALUGUEL
    server.post('/alugueis/novo', (req, res) => {
        db.iniciarAluguel(req, res);
    });

    server.put('/alugueis/:id/encerrar', (req, res) => {
        db.encerrarAluguel(req, res);
    });

    server.get('/alugueis', (req, res) => {
        db.getAluguel(req, res);
    });
    server.get('/alugueis/:id', (req, res) => {
        db.getAluguel(req, res);
    });

    await server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });

})();