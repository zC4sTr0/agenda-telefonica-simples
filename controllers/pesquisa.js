const Contato = require('../models/contact');
const fs = require('fs');
const path = require('path');

exports.postSearchContactPage = (req, res, next) => {
    Contato.findContact(req.body.txtsearch).then(([rows, data]) => {
        res.render('pesquisa', {
            contact_list: rows,
            pageTitle: 'Pesquisar contato',
            path: '/',
        });
    }).catch((err) => {
        console.log(err);
    });


};


exports.postEditContactPage = (req, res, next) => {
    var input = req.body.txtnome;
};

exports.postDeleteContactPage = (req, res, next) => {
    var input = req.body.contactID;
    Contato.deleteContact(input).finally(() => {
        const timeStamp = Date.now();
        const date_ob = new Date(timeStamp);

        const data = "[" + date_ob.getDate() + "/" + date_ob.getMonth() + 1 + "/" + date_ob.getFullYear() + "  —  " + date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds() + "]  - Um Contato foi excluído: \n Nome: " + req.body.contactNOME + " - " + req.body.contactIDADE + " anos - Tel: '" + req.body.contactTELEFONE + "'.\n\n\n";

        fs.appendFile(path.join(path.dirname(require.main.filename), 'logs', 'contatos_excluidos.log'), data, (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.status(200).send({ result: "redirect", url: "/" });
    });
};

exports.getSearchContactPage = (req, res, next) => {
    const all_contacts = Contato.getContacts();
    all_contacts.then(([rows, fieldData]) => {
        res.render('pesquisa', {
            contact_list: rows,
            pageTitle: 'Pesquisar contato',
            path: '/',
        });
    }).catch((err) => console.log(err));

};