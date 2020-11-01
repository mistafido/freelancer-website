const Comment = require('../database/models/Comment')

module.exports = (req,res) => {
    Comment.create({
        name: req.session.userId,
        content: req.body.comment
    }, (error, comment) => {
        if(error) {
            console.log(error)
            return res.redirect('/blogpost')
        } else {
            res.redirect('/blogpost')
        }
    })
}