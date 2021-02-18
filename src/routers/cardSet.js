const express = require('express')
const cardSetRouter = new express.Router
const CardSet = require('../models/cardSet')
const cors = require('cors')

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