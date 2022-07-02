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

// JUNCAO INTERNA
export async function vendedoresAssociados(req, res) {
    let qryText = `select cpf, nome from estabelecimento natural join vendedor where idestabelecimento = ${req.body.idestabelecimento}`;
    await db.query(qryText).then(result => res.send(result.at(0)))
        .catch(err => console.error(err));
}

// JUNCAO EXTERNA
export async function alugueisAssociadosCliente(req, res) {
    let qryText = `select idaluguel from cliente left outer join aluguel on cpf = cpfcliente where cpf = ${req.body.cpf};`;
    await db.query(qryText)
        .then(result => {
            if (result.at(0).at(0).idaluguel !== null)
                result.at(0).splice(0, 0, { jaAlugou: true });
            else
                result.at(0).splice(0, 0, { jaAlugou: false });
            res.send(result.at(0))
        })
        .catch(err => console.error(err));
}

// CLAUSULA DE GRUPO
export async function alugueisCountCliente(req, res) {
    let qryText = `select cpf, count(*) as numAlugueis from cliente join aluguel on cpf = cpfcliente group by cpf;`;
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err));
}

// CLAUSULA DE GRUPO + HAVING
export async function alugueisHistoricoCountCliente(req, res) {
    let qryText = `select cpf, count(*) as numAlugueis from cliente join aluguel on cpf = cpfcliente group by cpf, ativo having ativo = 'N';`;
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err));
}

// CLAUSULA DE GRUPO + HAVING + SUBCONSULTA
export async function alugueisHistoricoCarro(req, res) {
    let qryText = `select cpf, count(*) as numAlugueis from cliente join aluguel on cpf = cpfcliente group by cpf, placacarro having (cpf, placacarro) in (select cpf, placacarro from cliente join aluguel on cpf = cpfcliente where placacarro = ${req.body.placacarro});`;
    await db.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err));
}
