// models/User.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  tech: { type: String, required: true },
  year: { type: String, required: true },
  month: { type: String, required: true },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;