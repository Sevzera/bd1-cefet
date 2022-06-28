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