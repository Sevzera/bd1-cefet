import { default as connection } from "../database.js";
const db = await connection;

// QUERYS ESTABELECIMENTO
export async function addEstabelecimento(req, res) {
    let qryText = `insert into estabelecimento(endereco) values ('${req.body.endereco}');`;
    console.log(qryText);
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function updEstabelecimento(req, res) {
    let qryText = `update estabelecimento set endereco = '${req.body.endereco}' where idestabelecimento = ${req.body.idestabelecimento};`;
    console.log(qryText);
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function rmvEstabelecimento(req, res) {
    let qryText = `delete from estabelecimento where idestabelecimento = ${req.body.idestabelecimento};`;
    await db.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err.sqlMessage));
}

export async function getEstabelecimento(req, res) {
    let qryText = `select * from estabelecimento where idestabelecimento = ${req.body.idestabelecimento};`
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}