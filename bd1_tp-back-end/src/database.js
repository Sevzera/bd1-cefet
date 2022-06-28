import * as mysql from 'mysql2/promise';
let connection;

export async function connect() {
    if (!connection) {
        connection = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '123321',
            database: 'bd1_tp'
        });
        console.log('Connected to MySQL Database');
    }
    return connection;
}

export default connect();