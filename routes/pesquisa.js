const path = require('path');

const express = require('express');

const cadastroController = require('../controllers/cadastro');

const router = express.Router();

router.get('/', cadastroController.getContacts);

module.exports = router;
