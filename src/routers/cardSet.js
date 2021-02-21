const express = require('express')
const cardSetRouter = new express.Router
const CardSet = require('../models/cardSet')
const cors = require('cors')
const Card = require('../models/card')

cardSetRouter.post("/cardset", cors(), async (req, res) => {
    const cardSet = new CardSet({
        ...req.body
    })

    try {
        await cardSet.save()

        console.log(req.body)
    } catch (e) {
        console.log(e)
    }

    res.status(201).send(cardSet)
})

cardSetRouter.get("/cardset", cors(), async (req, res) => {
        try {
    
            const cardSet = await CardSet.find({ })
    
            res.status(200).send({ results: cardSet })
    
        } catch (e) {
            res.send(e + 'error')
        }
    
})

cardSetRouter.get("/cardset/:id", cors(), async (req, res) => {
    try {

        const cardSet = await CardSet.find({ _id : req.params.id })

        res.status(200).send({ results: cardSet })

    } catch (e) {
        res.send(e + 'error')
    }

})

cardSetRouter.post("/cardsetaddcard", cors(), async (req, res) => {
    
    console.log(req.body.cardId)
    console.log(req.body.cardSetId)
    const card = await Card.findOne({ _id : req.body.cardId })
    console.log(card)
    //const cardSet = await CardSet.find({ _id : req.body.cardSetId })

    
    const newCard = {
        _id : card._id,
        primary_language : card.primary_language,
        secondary_language : card.secondary_language,
        primary_word : card.primary_word,
        secondary_word : card.secondary_word,
        category : card.category,
        wordType : card.wordType
        }

    console.log (newCard)
    try{
    const responseUpdate = await CardSet.updateOne( { _id: req.body.cardSetId },
    { $push: { cards: [ newCard]  }}
      )
    
      res.status(200).send({ results: responseUpdate })

    } catch (e) {
        res.send(e + 'error')
    }


    //res.status(201).send(cardSet)
})

cardSetRouter.post("/cardsetremovecard", cors(), async (req, res) => {
    
    console.log(req.body.cardId)
    console.log(req.body.cardSetId)
    //const cardSet = await CardSet.find({ _id : req.body.cardSetId })


    try{
    const responseUpdate = await CardSet.updateOne( { _id: req.body.cardSetId },
    { $pull: { "cards":  { _id: req.body.cardId }   }}
      )
    
      res.status(200).send({ results: responseUpdate })

    } catch (e) {
        res.send(e + 'error')
    }


    //res.status(201).send(cardSet)
})

cardSetRouter.post("/cardsetbulk", cors(), async (req, res) => {
    var cardSetArray = new CardSet()

    //console.log(req.body)

    cardSetArray.collection.insert(req.body, onInsert)
    // .then(results => console.log(results))
    // .catch(e => console.log(e))

    function onInsert(err, docs) {
        if (err) {
            console.log(err)
            res.status(400).send(e)
        } else {

            res.status(201).send()
        }
    }

})


module.exports = cardSetRouter