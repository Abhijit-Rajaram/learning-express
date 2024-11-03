// models/User.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;