import * as mysql from 'mysql2/promise';
let connection;

export async function connect() {
    if (!connection) {
        connection = await mysql.createConnection("mysql://root:123321@localhost:3306/bd1_tp");
        console.log('Connected to MySQL Database');
    }
    return connection;
}

// QUERYS CLIENTE
export async function addCliente(req, res) {
    let qryText = `insert into cliente(cpf, nome, idade`;
    if (req.body.endereco)
        qryText = qryText + `, endereco`
    qryText = qryText + `) values (${req.body.cpf}, '${req.body.nome}', ${req.body.idade}`
    if (req.body.endereco)
        qryText = qryText + `, '${req.body.endereco}'`
    qryText = qryText + `);`
    await connection.query(qryText)
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
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function rmvCliente(req, res) {
    let qryText = `delete from cliente where cpf = ${req.body.cpf};`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err.sqlMessage));
}

export async function getCliente(req, res) {
    let qryText = `select * from cliente where cpf = ${rew.body.cpf};`
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

// QUERYS VENDEDOR
export async function addVendedor(req, res) {
    let qryText = `insert into vendedor(idestabelecimento, cpf, nome, salariobase) values (${req.body.idestabelecimento}, ${req.body.cpf}, '${req.body.nome}', ${req.body.salariobase});`;
    console.log(qryText);
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function updVendedor(req, res) {
    let qryText = `update vendedor set`;
    if (req.body.idestabelecimento)
        qryText = qryText + ` idestabelecimento = '${req.body.idestabelecimento}',`;
    if (req.body.nome)
        qryText = qryText + ` nome = '${req.body.nome}',`;
    if (req.body.salariobase)
        qryText = qryText + ` salariobase = '${req.body.salariobase}',`;
    qryText = qryText.slice(0, -1) + ` where cpf = ${req.body.cpf};`;
    console.log(qryText);
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function rmvVendedor(req, res) {
    let qryText = `delete from vendedor where cpf = ${req.body.cpf};`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err.sqlMessage));
}

export async function getVendedor(req, res) {
    let qryText = `select * from vendedor where cpf = ${req.body.cpf};`
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

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
    await connection.query(qryText)
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
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function rmvCarro(req, res) {
    let qryText = `delete from carro where placa = ${req.body.placa};`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err.sqlMessage));
}

export async function getCarro(req, res) {
    let qryText = `select * from carro where placa = ${req.body.placa};`
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

// QUERYS ESTABELECIMENTO
export async function addEstabelecimento(req, res) {
    let qryText = `insert into estabelecimento(endereco) values ('${req.body.endereco}');`;
    console.log(qryText);
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function updEstabelecimento(req, res) {
    let qryText = `update estabelecimento set endereco = '${req.body.endereco}' where idestabelecimento = ${req.body.idestabelecimento};`;
    console.log(qryText);
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

export async function rmvEstabelecimento(req, res) {
    let qryText = `delete from estabelecimento where idestabelecimento = ${req.body.idestabelecimento};`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err.sqlMessage));
}

export async function getEstabelecimento(req, res) {
    let qryText = `select * from estabelecimento where idestabelecimento = ${req.body.idestabelecimento};`
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

// QUERYS ALUGUEL
export async function getAluguel(req, res) {
    let qryText = `select * from aluguel where idaluguel = ${req.params.id};`;
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}

// DEMAIS FUNCOES
export async function iniciarAluguel(req, res) {
    let qryText = `insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(${req.body.valorbase}, ${req.body.cpfvendedor}, ${req.body.cpfcliente}, ${req.body.placacarro});`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err));
}

export async function encerrarAluguel(req, res) {
    let qryText = `update aluguel set ativo = 'N' where idaluguel = ${req.params.id};`;
    await connection.query(qryText)
        .then(result => res.send(result))
        .catch(err => console.error(err));
}

export async function gerarPagamentos(req, res) {
    let qryText = `select cpf, nome, salariobase + bonusmensal as salariomensal from vendedor;`;
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err));
}
