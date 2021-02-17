exports.get404 = (req, res, next) => {
    console.log('Erro 404! Você acessou o caminho: " '+ req.path + ' " via método: ' + req.method );
        res.status(404).render('404', {
            pageTitle: 'Página não encontrada!',
            path: '/404'
        });
    
};