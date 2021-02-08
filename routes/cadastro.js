const path = require('path');

const express = require('express');

const cadastroController = require('../controllers/cadastro');

const router = express.Router();
console.log('registrando página do cadastro');
router.get('/cadastro', cadastroController.getAddContact);
router.post('/cadastro', cadastroController.postAddContact);

module.exports = router;