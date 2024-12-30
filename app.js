const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const scrapingRoutes = require('./routes/scraping');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const resultRoutes = require('./routes/results');
const authRoutes = require('./routes/auth');

app.use('/results', resultRoutes);
app.use('/auth', authRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});app.use('/scraping', scrapingRoutes);
