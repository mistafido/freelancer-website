const Event = require('../database/models/Event');
const path = require('path')

module.exports = (req, res) => {
    const { image } = req.files;
    image.mv(path.resolve(__dirname , '..' , 'uploads/events' , image.name), (error) => {
        Event.create({
            ...req.body,
            image: `/events/${req.body.title}+${image.name}`
        }, (error, event) => {
            if(error) {
                console.log(error)
            }
            res.redirect('/gallery/new')
        });
    })
}