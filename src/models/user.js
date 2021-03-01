const mongoose = require('mongoose')
//const validator = require('validator')
//const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        trim: true,
        required: true
    },
    display_name: {
        type: String,
        trim: true
    },
    photo_url: {
        type: String,
        trim: true
    },
    provider: {
        type: String,
        trim: true
    },
    first_name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true
    },
    last_login_date: {
        type: Date
    },
    level: {
        type: Number,
        default: 0
    }
},
    {
    timestamps: true
})

const User = mongoose.model('users_0001', userSchema)

module.exports = User