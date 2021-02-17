const express = require('express');

const pesquisaController = require('../controllers/pesquisa');

const router = express.Router();


router.get('/', pesquisaController.getSearchContactPage);
router.post('/delete', pesquisaController.postDeleteContactPage);
router.post('/edit', pesquisaController.postEditContactPage);
router.post('/search', pesquisaController.postSearchContactPage);

module.exports = router;
