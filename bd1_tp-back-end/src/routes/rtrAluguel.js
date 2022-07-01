import express from 'express';
const router = express.Router();
import * as control from '../controller/ctrlAluguel.js';

// ROTAS ALUGUEL
router.get('/', (req, res) => {
    control.getAluguel(req, res);
});
router.get('/:id', (req, res) => {
    control.getAluguel(req, res);
});

export default router;

