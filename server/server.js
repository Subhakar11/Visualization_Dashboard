const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Data = require('/models/dataModel');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/dashboardDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

app.get('/api/data', async (req, res) => {
  try {
    const filters = {};

    if (req.query.end_year) filters.end_year = req.query.end_year;
    if (req.query.topic) filters.topic = req.query.topic;
    if (req.query.sector) filters.sector = req.query.sector;
    if (req.query.region) filters.region = req.query.region;
    if (req.query.pestle) filters.pestle = req.query.pestle;
    if (req.query.source) filters.source = req.query.source;
    if (req.query.swot) filters.swot = req.query.swot;
    if (req.query.country) filters.country = req.query.country;
    if (req.query.city) filters.city = req.query.city;

    const data = await Data.find(filters);
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
