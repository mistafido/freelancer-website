const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model('Comment', CommentSchema);