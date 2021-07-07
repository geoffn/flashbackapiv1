const mongoose = require('mongoose')
//const validator = require('validator')
//const bcrypt = require('bcrypt')


const cardSetSchema = new mongoose.Schema({

    uid: {
        type: String,
        required: true
    },
    set_name: {
        type: String,
        trim: true,
        required: true
    },
    set_description: {
        type: String,
        trim: true,
        required: false
    },
    public : {
        type: Boolean,
        required: true,
        default: false
    },
    access_count: {
        type: Number,
        required: true,
        default: 0
    },
    last_accessed: {
        type: Date,
        require: true,
        default: new Date()
    },
    cards:[
        {
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
            }
        }
    ]
    
},
    {
    timestamps: true
})

const CardSet = mongoose.model('cardsets_0001', cardSetSchema)

module.exports = CardSet