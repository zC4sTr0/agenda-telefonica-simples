const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pageNotFoundController = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const cadastroRoutes = require('./routes/cadastro');
const pesquisaRoutes = require('./routes/pesquisa');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cadastroRoutes);
app.use(pesquisaRoutes);

app.use(pageNotFoundController.get404);

app.listen(80);
