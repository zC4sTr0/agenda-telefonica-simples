const Contato = require('../models/contact');



exports.getEditar = (req, res, next) => {
    Contato.getSingleContactData(req.query.contactID).then(([rows, fieldData]) => {
        res.render('editar', {
            pageTitle: 'Editar contato',
            path: '/editar',
            contact_info: rows[0]
        });
    }).catch((err) => console.log(err));

};

exports.postEditar = (req, res, next) => {
    Contato.editContact(req.body.txtid, req.body.txtnome, req.body.txtidade, req.body.txtnumero).finally(() => res.redirect('/'));
};
