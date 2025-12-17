const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  logo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Club', ClubSchema);
