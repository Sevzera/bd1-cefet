(async () => {
    const express = require('express');
    const server = express();
    const port = 5000;
    await server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    })
    const db = require("./database");
    await db.connect();

    let alg1 = {
        valorbase: 2500,
        cpfvendedor: 12345678900,
        cpfcliente: 12345678905,
        placacarro: 1234567
    }
    await db.addAluguel(aluguel = alg1);
    let alg2 = {
        valorbase: 5000,
        cpfvendedor: 12345678901,
        cpfcliente: 12345678906,
        placacarro: 2345678
    }
    await db.addAluguel(aluguel = alg2);

    console.log(await db.getAluguel(id = 1));

    console.log(await db.getAluguel());

    db.endAluguel(cpfcliente = 12345678906);

    console.log(await db.getAluguel(id = 1));

    console.log(await db.getAluguel());

})();