const express = require('express');
const app = express();
const path = require("path");
const port = 5001;
const db = require('./models');
const cors = require('cors');
const handleNews = require('./routes/handleNews');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

app.use(cors());

app.use(express.json());

// Middleware untuk melayani file statis dari folder 'public/images'
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// News
app.use('/api/handleNews', handleNews);

// Menambahkan route untuk user
app.use('/users', userRoutes);

//auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

db.sequelize.sync().then(async () => {

  // Start Express Server
  app.get('/', (req, res) => res.send('Hello World!'));
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});


app.use('/apiadmin/news', newsRoutes);

app.post('/apiadmin/news/add', (req, res) => {
  console.log('Request body:', req.body); // Debug log
  const { title, content } = req.body;
  console.log('Data diterima:', { title, content }); // Debugging
  res.status(201).json({ message: 'Berita berhasil ditambahkan!' });
});

// Middleware untuk parsing JSON
app.use(bodyParser.json());


