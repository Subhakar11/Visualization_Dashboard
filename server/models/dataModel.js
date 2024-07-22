const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  end_year: { type: String },
  intensity: { type: Number, required: true },
  sector: { type: String, required: false },
  topic: { type: String, required: false },  
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: String },
  impact: { type: String },
  added: { type: Date },
  published: { type: Date },
  country: { type: String },
  relevance: { type: Number, required: true },
  pestle: { type: String },
  source: { type: String },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
