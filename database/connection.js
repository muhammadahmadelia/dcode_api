import mysql from 'mysql';

// creating connection with mysql using credentials
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dcode"
});

export { connection };