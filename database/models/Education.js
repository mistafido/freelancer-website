const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    college: String,
    degree: String,
    course: String,
    gpa: String,
    duration: String
})

const Education = mongoose.model('Education', EducationSchema);

module.exports = Education;