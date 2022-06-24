import * as mysql from 'mysql2/promise';
let connection;

export async function connect() {
    if (!connection) {
        connection = await mysql.createConnection("mysql://root:123321@localhost:3306/bd1_tp");
        console.log('Connected to MySQL Database');
    }
    return connection;
}

export async function getAluguel(req, res) {
    let qryText = `select * from aluguel;`;
    if (req.params.id)
        qryText = qryText.replace(`;`, ` where idaluguel = ${req.params.id};`);
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function iniciarAluguel(req, res) {
    let qryText = `insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(${req.body.valorbase}, ${req.body.cpfvendedor}, ${req.body.cpfcliente}, ${req.body.placacarro});`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err));
}

export async function encerrarAluguel(req, res) {
    let qryText = `update aluguel set ativo = 'N' where cpfcliente = ${req.body.cpfcliente} AND idaluguel = ${req.params.id};`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err));
}
