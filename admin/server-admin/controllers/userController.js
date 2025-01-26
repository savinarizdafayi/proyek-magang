const { Users } = require('../models'); // Mengimpor model Users

// Fungsi untuk membuat user baru
async function createUser(req, res) {
  const { username, password } = req.body;

  try {
    // Menggunakan bcrypt untuk meng-hash password
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(password, 10);

    // Membuat user baru di database
    const user = await Users.create({
      username: username,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User berhasil dibuat', user });
  } catch (error) {
    console.error('Error saat membuat user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat membuat user' });
  }
}

module.exports = { createUser };
