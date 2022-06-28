// QUERYS ALUGUEL
export async function getAluguel(req, res) {
    let qryText = `select * from aluguel where idaluguel = ${req.params.id};`;
    await connection.query(qryText)
        .then(result => res.send(result.at(0)))
        .catch(err => console.error(err.sqlMessage));
}