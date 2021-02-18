const mongoose = require('mongoose')
//const validator = require('validator')
//const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({

    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    }
},
    {
    timestamps: true
})

const User = mongoose.model('users_0001', userSchema)

module.exports = User