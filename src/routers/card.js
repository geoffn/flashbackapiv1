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




module.exports = cardRouter