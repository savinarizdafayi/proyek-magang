const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("Request body:", req.body);

    try {
        const user = await Users.findOne({ where: { username } });
        console.log("User ditemukan:", user);
        if (!user) {
            return res.status(401).json({ message: 'User tidak ditemukan' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Password salah' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token, message: 'Login berhasil' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

module.exports = router;

