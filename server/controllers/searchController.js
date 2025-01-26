const { Op } = require('sequelize');
const { NewsPosts, Services } = require('../models');

const searchController = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Keyword pencarian tidak boleh kosong' });
  }

  try {
    const newspostResults = await NewsPosts.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
      },
    });
    console.log("Newspost Results:", newspostResults);


    const serviceResults = await Services.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
      },
    });
    console.log("Service Results:", serviceResults);


    const results = [
      ...newspostResults.map((item) => ({
        id: item.id,
        type: 'newsposts',
        title: item.title,
        content: item.content,
      })),
      ...serviceResults.map((item) => ({
        id: item.id,
        type: 'services',
        title: item.title,
        content: item.content,
      })),
    ];

    res.json(results);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

module.exports = { searchController };
