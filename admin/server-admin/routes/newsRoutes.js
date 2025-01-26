const express = require('express');
const router = express.Router();
const { NewsPosts } = require('../models');

// Endpoint POST untuk menambah berita baru
router.post('/add', async (req, res) => {
  const { title, content, image_url } = req.body; // Ambil data dari request body
  try {
    const newNews = await NewsPosts.create({ title, content, image_url });
    res.status(201).json({ message: 'Berita berhasil ditambahkan!', news: newNews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan berita.' });
  }
});

// Endpoint PUT untuk mengedit berita
router.put('/:id', async (req, res) => {
  const { id } = req.params; // Ambil id dari URL
  const { title, content, image_url } = req.body; // Ambil data baru dari request body

  try {
    // Cari berita berdasarkan ID
    const news = await NewsPosts.findByPk(id);
    if (!news) {
      return res.status(404).json({ message: 'Berita tidak ditemukan' });
    }

    // Update berita dengan data baru
    news.title = title || news.title; // Gunakan data baru jika ada, jika tidak biarkan yang lama
    news.content = content || news.content;
    news.image_url = image_url || news.image_url;

    // Simpan perubahan
    await news.save();

    res.status(200).json({ message: 'Berita berhasil diperbarui!', news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui berita.' });
  }
});

// Endpoint DELETE untuk menghapus berita
router.delete('/:id', async (req, res) => {
  const { id } = req.params; // Ambil id dari URL

  try {
    // Cari berita berdasarkan ID
    const news = await NewsPosts.findByPk(id);
    if (!news) {
      return res.status(404).json({ message: 'Berita tidak ditemukan' });
    }

    // Hapus berita
    await news.destroy();

    res.status(200).json({ message: 'Berita berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus berita.' });
  }
});

module.exports = router;
