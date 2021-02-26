const express = require('express')
const userRouter = new express.Router
const User = require('../models/user')
const cors = require('cors')

userRouter.post("/user", cors(), async (req, res) => {
    const user = new User({
        ...req.body
    })

    try {
        await user.save()

        console.log(req.body)
    } catch (e) {
        console.log(e)
    }

    res.status(201).send(user)
})

userRouter.get("/users", cors(), async (req, res) => {
        try {
    
            const user = await User.find({ })
    
            res.status(200).send({ results: user })
    
        } catch (e) {
            res.send(e + 'error')
        }
    
})

userRouter.get("/user/:uid", cors(), async (req, res) => {
    try {
        
        const user = await User.find({ uid: req.params.uid })

        res.status(200).send({ results: user })

    } catch (e) {
        res.send(e + 'error')
    }

})
userRouter.get("/userbyemail/:email", cors(), async (req, res) => {
    try {
        
        const user = await User.find({ email: req.params.email })

        res.status(200).send({ results: user })

    } catch (e) {
        res.send(e + 'error')
    }

})

userRouter.post("/userbulk", cors(), async (req, res) => {
    var userArray = new User()

    //console.log(req.body)

    userArray.collection.insert(req.body, onInsert)
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



module.exports = userRouter