const Contact = require('../database/models/Contact');

module.exports = (req, res) => {
    Contact.create(req.body, (error,comment) => {
        res.redirect('/')
    })
    
}