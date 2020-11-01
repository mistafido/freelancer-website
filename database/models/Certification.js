const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
    position: String,
    college: String,
    competition: String
})

const Certification = mongoose.model('Certification', CertificationSchema);

module.exports = Certification;