const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: {
        type: String,
        required: [true, 'Please provide your username!'],
        unique: true
    },
    email: {
        type: String,
        required: [true,  'Please provide your email!'],
        unique: true

    },
    password: {
        type: String,
        required: [true, 'Please provide your password!']
    },
})

module.exports = mongoose.model('User', UserSchema);