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
    word_type: {
        type: String,
        trim: true
    },
    uid: {
        type: String,
        require: true,
        trim: true
    },
    hidden: {
        type: Boolean,
        required: true,
        default: false
    }
},
    {
    timestamps: true
})

const Card = mongoose.model('core_cards_0001', cardSchema)

module.exports = Card