const Post = require('../database/models/Post');
const Comment = require('../database/models/Comment')

module.exports = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('author');

    res.render('post', {
        post,
       
    });
}