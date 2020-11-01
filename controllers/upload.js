const Event = require('../database/models/Event');
const path = require('path')

module.exports = (req, res) => {
    const {image} = req.files
    console.log(image)
    
    // image.mv(path.resolve(__dirname , '..' , 'uploads/' , image.name), (error) => {
    //     Event.create({
    //         ...req.body,
    //         image: `/${image.name}`
    //     }, (error, post) => {
    //         res.redirect('/blogpost')
    //     });
    // })
}
