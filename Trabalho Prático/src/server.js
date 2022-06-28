import express from 'express';
import * as db from './back-end/database.js';

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

    // ROTAS ESTABELECIMENTO
    server.post('/estabelecimento/cadastro', (req, res) => {
        db.addEstabelecimento(req, res);
    });
    server.put('/estabelecimento/atualizar', (req, res) => {
        db.updEstabelecimento(req, res);
    });
    server.delete('/estabelecimento/remover', (req, res) => {
        db.rmvEstabelecimento(req, res);
    });
    server.get('/estabelecimento/consultar', (req, res) => {
        db.getEstabelecimento(req, res);
    });

    // ROTAS ALUGUEL
    server.get('/alugueis', (req, res) => {
        db.getAluguel(req, res);
    });
    server.get('/alugueis/:id', (req, res) => {
        db.getAluguel(req, res);
    });

    // DEMAIS ROTAS
    server.post('/alugueis/novo', (req, res) => {
        db.iniciarAluguel(req, res);
    });
    server.put('/alugueis/:id/encerrar', (req, res) => {
        db.encerrarAluguel(req, res);
    });
    server.get('/vendedor/gerar-pagamentos', (req, res) => {
        db.gerarPagamentos(req, res);
    });

    await server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });

})();