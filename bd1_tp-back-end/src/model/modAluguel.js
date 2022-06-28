import { default as connection } from "../database.js";
const db = await connection;

// QUERYS ALUGUEL
export async function getAluguel(req, res) {
    let qryText = `select * from aluguel`;
    if (req.params.id)
        qryText = qryText + `where idaluguel = ${req.params.id};`;
    qryText = qryText + ';';
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}