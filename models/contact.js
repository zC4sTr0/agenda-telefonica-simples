const db = require('../util/database');


module.exports = class Contact {
    constructor(name, age, number) {
        this.name = name;
        this.age = age;
        this.number = number;
    }

    save() {

        return db.execute('INSERT into contato (NOME, IDADE) VALUES (?, ?)',
            [this.name, this.age]).then(() => {
                db.execute('SELECT MAX(ID) as lastID from contato').then(([rows, fieldData]) => {
                    var next_ID = rows[0].lastID;
                    db.execute('INSERT into telefone (NUMERO, IDCONTATO) VALUES (?, ?)',
                        [this.number, next_ID]).then().catch(err => console.log(err));
                }).catch(err => console.log(err));
            });

    }

    static deleteContact(id) {
       return db.execute('DELETE from telefone WHERE IDCONTATO = ?', [id]).then(([rows, fieldData]) => {
             db.execute('DELETE FROM contato WHERE ID = ?', [id]).then().catch((err) => console.log(err));
        }).catch((err) => console.log(err));
    }

    static findContact(nome) {
        return db.execute('SELECT a.ID, a.NOME, a.IDADE, b.NUMERO from contato AS a INNER JOIN telefone as b on a.ID = b.IDCONTATO WHERE a.NOME LIKE ? LIMIT 30', ['%' + nome + '%']);
    }

    static getContacts() {
        return db.execute('SELECT a.ID, a.NOME, a.IDADE, b.NUMERO from contato AS a INNER JOIN telefone as b on a.ID = b.IDCONTATO LIMIT 30');
    }

}