const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "davinTI",
    password: "alwayslearning",
    database: "agenda"
});


module.exports = pool.promise();
