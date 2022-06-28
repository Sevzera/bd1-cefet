import express from 'express';
import * as db from './back-end/database.js';

import { default as rtsAluguel } from "./back-end/routes/rtsAluguel.js";
import { default as rtsCarro } from "./back-end/routes/rtsCarro.js";
import { default as rtsCliente } from "./back-end/routes/rtsCliente.js";
import { default as rtsEstabelecimento } from "./back-end/routes/rtsEstabelecimento.js";
import { default as rtsVendedor } from "./back-end/routes/rtsVendedor.js";
import { default as rtsGeneral } from './back-end/routes/rtsGeneral.js'

export const app = async () => {
    const server = express();
    server.use(express.json());
    const port = 5000;
    await db.connect();

    server.use('/aluguel', rtsAluguel);
    server.use('/carro', rtsCarro);
    server.use('/cliente', rtsCliente);
    server.use('/estabelecimento', rtsEstabelecimento);
    server.use('/vendedor', rtsVendedor);
    server.use('', rtsGeneral);

    await server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

app();