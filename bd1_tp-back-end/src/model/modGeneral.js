import { default as connection } from "../database.js";
const db = await connection;

// QUERYS GERAL
export async function iniciarAluguel(req, res) {
    let qryText = `insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(${req.body.valorbase}, ${req.body.cpfvendedor}, ${req.body.cpfcliente}, ${req.body.placacarro});`;
    await db.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err));
}

export async function encerrarAluguel(req, res) {
    let qryText = `update aluguel set ativo = 'N' where idaluguel = ${req.params.id};`;
    await db.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err));
}

export async function gerarPagamentos(req, res) {
    let qryText = `select cpf, nome, salariobase + bonusmensal as salariomensal from vendedor;`;
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err));
}