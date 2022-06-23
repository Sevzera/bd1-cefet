import express from 'express';
import * as db from './database.js';

(async () => {
    const server = express();
    server.use(express.json());
    const port = 5000;
    await db.connect();

    server.get('/alugueis', (req, res) => {
        db.getAluguel(req, res);
    });
    server.get('/alugueis/:id', (req, res) => {
        db.getAluguel(req, res);
    });

    server.post('/alugueis/novo', (req, res) => {
        db.addAluguel(req, res);
    });

    server.put('/alugueis/:id/encerrar', (req, res) => {
        db.endAluguel(req, res);
    })

    await server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    })

})();