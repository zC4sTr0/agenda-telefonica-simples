const Contato = require('../models/contact');

exports.postSearchContactPage = (req, res, next) => {
    console.log('post do search!');
    var input = req.body.txtnome;
    console.log(input);
    console.log(req.body);

    res.redirect('/');
};


exports.postEditContactPage = (req, res, next) => {
    var input = req.body.txtnome;
    console.log('post do edit!');
    console.log(input);
    console.log(req.body);
    res.redirect('/');
};
exports.postDeleteContactPage = (req, res, next) => {
    console.log('post do delete!');
    var input = req.body.txtnome;
    console.log(input);
    console.log(req.body);
    res.redirect('/');
};

exports.getSearchContactPage = (req, res, next) => {
    const all_contacts = Contato.getContacts();
    all_contacts.then(([rows, fieldData]) => {
        console.log(rows);

        res.render('pesquisa', {
            contact_list: rows,
            pageTitle: 'Pesquisar contato',
            path: '/',
        });
    }).catch((err) => console.log(err));

};