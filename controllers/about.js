const Experience = require('../database/models/Experience');
const Education = require('../database/models/Education');
const Certification = require('../database/models/Certification');



module.exports = async (req, res) => {
    const experiences = await Experience.find({});
    const educations = await Education.find({});
    const certificaions = await Certification.find({});
    res.render('about', {
        experiences,
        educations,
        certificaions
    });
}