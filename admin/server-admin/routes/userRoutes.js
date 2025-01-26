// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController'); // Mengimpor controller

// Mendefinisikan route untuk membuat user
router.post('/create', createUser);

module.exports = router;
