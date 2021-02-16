const path = require('path');

const express = require('express');

const pesquisaController = require('../controllers/pesquisa');

const router = express.Router();

router.get('/', pesquisaController.getSearchContactPage);
//router.post('/', pesquisaController.postSearchContactPage);
router.post('/edit', pesquisaController.postEditContactPage);
router.post('/delete', pesquisaController.postDeleteContactPage);
router.post('/search', pesquisaController.postSearchContactPage);
module.exports = router;
