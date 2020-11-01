const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Event', EventSchema);