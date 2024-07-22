const mongoose = require('mongoose');
const Data = require('/models/dataModel');
const fs = require('fs');
const path = require('path');

mongoose.set('strictQuery', true); // Suppress the deprecation warning

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/dashboardDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Load data from JSON file
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, 'jsondata.json'), 'utf8'));

// Insert data into the collection
Data.insertMany(jsonData)
  .then(result => {
    console.log('Data inserted:', result.length);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
    mongoose.connection.close();
  });
