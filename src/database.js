module.exports = { connect, getAluguel, addAluguel, endAluguel }

const mysql = require('mysql2/promise');
let connection;

async function connect() {
    if (!connection) {
        connection = await mysql.createConnection("mysql://root:123321@localhost:3306/bd1_tp");
        console.log('Connected to MySQL Database');
    }
    return connection;
}

async function getAluguel(id) {
    let qryText = `select * from aluguel;`;
    if (id)
        qryText = qryText.replace(`;`, ` where idaluguel = ${id};`);
    return await connection.query(qryText).then(result => result.at(0)).catch(err => console.error(err.sqlMessage));
}

async function addAluguel(aluguel) {
    let qryText = `insert into aluguel(idaluguel, valorbase, cpfvendedor, cpfcliente, placacarro) values(${aluguel.idaluguel}, ${aluguel.valorbase}, ${aluguel.cpfvendedor}, ${aluguel.cpfcliente}, ${aluguel.placacarro});`;
    await connection.query(qryText).catch(err => console.error(err.sqlMessage));
}

async function endAluguel(cpfcliente) {
    let qryText = `update aluguel set ativo = 'N' where cpfcliente = ${cpfcliente};`;
    await connection.query(qryText).catch(err => console.error(err.sqlMessage));
}
