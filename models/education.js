// models/User.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: { type: String, required: true },
  passing: { type: String, required: true },
  grade: { type: String, required: true }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;