const express = require('express');
const app = express();
const path = require("path");
const port = 3001;
const db = require('./models');
const routes = require("./routes/searchRoutes");
const cors = require('cors');
const handleNews = require('../server/routes/handleNews');
const newsRoutes = require('./routes/newsRoutes');
const searchRoutes = require('../server/routes/searchRoutes');

app.use(cors());

app.use(express.json());

// Middleware untuk melayani file statis dari folder 'public/images'
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// News
app.use('/api/handleNews', handleNews);

// Search
app.use('/api', searchRoutes);

// Rute API
app.use('/api/news', newsRoutes);

// Routers
app.use(routes);

//auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

db.sequelize.sync().then(async () => {

  // Start Express Server
  app.get('/', (req, res) => res.send('Hello World!'));
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});



