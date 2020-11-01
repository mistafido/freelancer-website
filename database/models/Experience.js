const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    title: String,
    company: String,
    content: String,
    date: String
})

const Experience = mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;