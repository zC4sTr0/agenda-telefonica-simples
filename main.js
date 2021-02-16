const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pageNotFoundController = require('./controllers/404');
const db = require('./util/database');

db.execute('CREATE DATABASE IF NOT EXISTS agenda').then(() => {
  db.execute('CREATE TABLE IF NOT EXISTS contato (ID INTEGER(14) AUTO_INCREMENT PRIMARY KEY, NOME VARCHAR(100), IDADE VARCHAR(3))').then(() => {
    db.execute('CREATE TABLE IF NOT EXISTS telefone (IDCONTATO INTEGER(14), ID INTEGER(14) AUTO_INCREMENT PRIMARY KEY, NUMERO VARCHAR(16), FOREIGN KEY(IDCONTATO) REFERENCES contato(ID))').catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });
}).catch((err) => {
  console.log(err);
});
//Pensei em colocar mais configurações, como not null etc, 
//mas resolvi respeitar a tabela enviada pela davinTI.
//Se fosse em um ambiente de trabalho, eu conversaria com a equipe sobre minha sugestão de como melhorar o sistema.

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
