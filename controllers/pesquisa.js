const Contato = require('../models/contact');

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