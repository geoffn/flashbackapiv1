const express = require('express')
const cardRouter = new express.Router
const Card = require('../models/card')
const cors = require('cors')

cardRouter.post("/card", cors(), async (req, res) => {
    const card = new Card({
        ...req.body
    })

    try {
        await card.save()

        console.log(req.body)
    } catch (e) {
        console.log(e)
    }

    res.status(201).send(card)
})

cardRouter.get("/card", cors(), async (req, res) => {
        try {
    
            const card = await Card.find({ })
    
            res.status(200).send({ results: card })
    
        } catch (e) {
            res.send(e + 'error')
        }
    
})

cardRouter.post("/cardbulk", cors(), async (req, res) => {
    var cardArray = new Card()

    //console.log(req.body)

    cardArray.collection.insert(req.body, onInsert)
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

cardRouter.get("/cat", cors(), async (req, res) => {
    try {
    
        const card = await Card.distinct( 'category' )

        res.status(200).send({ results: card })

    } catch (e) {
        res.send(e + 'error')
    }
})



module.exports = cardRouter