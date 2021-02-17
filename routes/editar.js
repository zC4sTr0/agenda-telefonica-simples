const path = require('path');

const express = require('express');

const editarController = require('../controllers/editar');

const router = express.Router();

router.get('/editar', editarController.getEditar);
router.post('/editar', editarController.postEditar);

module.exports = router;
