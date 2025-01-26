const { NewsPosts } = require('../models');

// Mendapatkan berita berdasarkan ID
exports.getNewsById = async (req, res) => {
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
    console.error('Error fetching news by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Mendapatkan semua berita
exports.getAllNews = async (req, res) => {
  try {
    const allNews = await NewsPosts.findAll();
    res.json(allNews); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
