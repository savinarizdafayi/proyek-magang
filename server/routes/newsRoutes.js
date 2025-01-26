const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Rute untuk mendapatkan berita berdasarkan ID
router.get('/:id', newsController.getNewsById);

// Rute untuk mendapatkan semua berita
router.get('/', newsController.getAllNews);

module.exports = router;
