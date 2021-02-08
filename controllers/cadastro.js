const Contato = require('../models/contact');

exports.getAddContact = (req, res, next) => {
    res.render('cadastro', {
        pageTitle: 'Cadastrar contato',
        path: '/cadastro',
    });
};

exports.postAddContact = (req, res, next) => {
    const contact = new Contato(req.body.title);
    contact.save();
    res.redirect('/');
};

exports.getContacts = (req, res, next) => {
  //  const contacts = Contact.getContacts();
    // const url = req.url;
    res.render('pesquisa', {
        //contact_list: contacts,
        pageTitle: 'Pesquisar contato',
        path: '/',
        //hasContacts: contacts.length > 0
    });
};
