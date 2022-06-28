import express from 'express';
const router = express.Router();
import * as model from '../model/modAluguel.js';

// ROTAS ALUGUEL
router.get('/', (req, res) => {
    db.getAluguel(req, res);
});
router.get('/:id', (req, res) => {
    db.getAluguel(req, res);
});

export default router;
