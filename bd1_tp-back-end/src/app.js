import express from 'express';

import { default as rtrAluguel } from "./routes/rtrAluguel.js";
import { default as rtrCarro } from "./routes/rtrCarro.js";
import { default as rtrCliente } from "./routes/rtrCliente.js";
import { default as rtrEstabelecimento } from "./routes/rtrEstabelecimento.js";
import { default as rtrVendedor } from "./routes/rtrVendedor.js";
import { default as rtrGeneral } from './routes/rtrGeneral.js'

export const app = async () => {
    const server = express();
    server.use(express.json());
    const port = 5000;

    server.use('/aluguel', rtrAluguel);
    server.use('/carro', rtrCarro);
    server.use('/cliente', rtrCliente);
    server.use('/estabelecimento', rtrEstabelecimento);
    server.use('/vendedor', rtrVendedor);
    server.use('', rtrGeneral);

    await server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

app();