const express = require('express');
const router = express.Router();
const { NewsPosts } = require('../models');
console.log(NewsPosts);
// GET semua berita
router.get('/', async (req, res) => {
  try {
    const news = await NewsPosts.findAll({
      attributes: ['id', 'title', 'content', ['image_url', 'image'], 'createdAt'], // Kolom yang ingin ditampilkan
    });

    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Error fetching news' });
  }
});

// GET berita berdasarkan ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    console.log(`Fetching news with ID: ${id}`); // Debug log
    const news = await NewsPosts.findOne({
      where: { id },
      attributes: ['id', 'title', 'content', ['image_url', 'image'], 'createdAt'],
    });

    if (!news) {
      console.log(`News with ID ${id} not found`);
      return res.status(404).json({ message: 'Berita tidak ditemukan' });
    }

    res.json(news);
  } catch (error) {
    console.error('Error fetching news by ID:', error); // Log the error
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;