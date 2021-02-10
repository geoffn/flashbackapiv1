const mongoose = require('mongoose')
//const validator = require('validator')
//const bcrypt = require('bcrypt')


const cardSchema = new mongoose.Schema({

    spanish: {
        type: String,
        trim: true,
        required: true
    },
    english: {
        type: String,
        trim: true,
        required: true
    },
    alternatives: [
        {
            altType: {
                type: String,
                trim: true
            },
            value: {
                type: String,
                trim: true
            }
        }
    ],
    category: {
        type: String,
        required: true
    },
    wordType: {
        type: String,
        trim: true
    }
},
    {
    timestamps: true
})

const Card = mongoose.model('spanish', cardSchema)

module.exports = Card