import { default as connection } from "../database.js";
const db = await connection;

// QUERYS CARRO
export async function addCarro(req, res) {
    let qryText = `insert into carro(idestabelecimento, placa, custodia, modelo`;
    if (req.body.cor)
        qryText = qryText + `, cor`
    qryText = qryText + `) values (${req.body.idestabelecimento}, ${req.body.placa}, ${req.body.custodia}, '${req.body.modelo}'`
    if (req.body.cor)
        qryText = qryText + `, '${req.body.cor}'`
    qryText = qryText + `);`
    console.log(qryText);
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function updCarro(req, res) {
    let qryText = `update carro set`;
    if (req.body.idestabelecimento)
        qryText = qryText + ` idestabelecimento = '${req.body.idestabelecimento}',`;
    if (req.body.custodia)
        qryText = qryText + ` custodia = '${req.body.custodia}',`;
    if (req.body.cor)
        qryText = qryText + ` cor = '${req.body.cor}',`;
    qryText = qryText.slice(0, -1) + ` where placa = ${req.body.placa};`;
    console.log(qryText);
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function rmvCarro(req, res) {
    let qryText = `delete from carro where placa = ${req.body.placa};`;
    await db.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err.sqlMessage));
}

export async function getCarro(req, res) {
    let qryText = `select * from carro where placa = ${req.body.placa};`
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}