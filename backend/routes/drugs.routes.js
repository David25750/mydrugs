const express = require('express');
const router = express.Router();

const drug = require('../controllers/drugs.controller');

router.get('/drugs', drug.getAll);
router.get('/drugs/:id', drug.getById);

module.exports = router;
