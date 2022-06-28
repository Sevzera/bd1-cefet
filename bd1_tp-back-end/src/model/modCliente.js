import { default as connection } from "../database.js";
const db = await connection;

// QUERYS CLIENTE
export async function addCliente(req, res) {
    let qryText = `insert into cliente(cpf, nome, idade`;
    if (req.body.endereco)
        qryText = qryText + `, endereco`
    qryText = qryText + `) values (${req.body.cpf}, '${req.body.nome}', ${req.body.idade}`
    if (req.body.endereco)
        qryText = qryText + `, '${req.body.endereco}'`
    qryText = qryText + `);`
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function updCliente(req, res) {
    let qryText = `update cliente set`;
    if (req.body.nome)
        qryText = qryText + ` nome = '${req.body.nome}',`;
    if (req.body.endereco)
        qryText = qryText + ` endereco = '${req.body.endereco}',`;
    qryText = qryText.slice(0, -1) + ` where cpf = ${req.body.cpf};`;
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function rmvCliente(req, res) {
    let qryText = `delete from cliente where cpf = ${req.body.cpf};`;
    await db.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err.sqlMessage));
}

export async function getCliente(req, res) {
    let qryText = `select * from cliente where cpf = ${req.body.cpf};`
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}