import mysql from 'mysql';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'skin1980',
    database: "usersCadastro"
})

