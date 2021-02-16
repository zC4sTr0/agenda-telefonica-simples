const Contato = require('../models/contact');



exports.getAddContact = (req, res, next) => {
    res.render('cadastro', {
        pageTitle: 'Cadastrar contato',
        path: '/cadastro',
    });
};

exports.postAddContact = (req, res, next) => {
    const contact = new Contato(req.body.txtnome, req.body.txtidade, req.body.txtnumero);
    contact.save(res).finally(() => res.redirect('/'));
    
};
