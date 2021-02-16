const mongoose = require('mongoose')
//const validator = require('validator')
//const bcrypt = require('bcrypt')


const cardSchema = new mongoose.Schema({

    primary_language: {
        type: String,
        trim: true,
        required: true
    },
    secondary_language: {
        type: String,
        trim: true,
        required: true
    },
    primary_word: {
        type: String,
        trim: true,
        required: true
    },
    secondary_word: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    wordType: {
        type: String,
        trim: true
    },
    OwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        default: '000000000000000000000000'
    }
},
    {
    timestamps: true
})

const Card = mongoose.model('core_language_0001', cardSchema)

module.exports = Card