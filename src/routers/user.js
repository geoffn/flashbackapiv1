const express = require('express')
const userRouter = new express.Router
const User = require('../models/user')
const cors = require('cors')
const authToken = require('../helpers/token')

userRouter.post("/user", cors(), authToken.authenticateToken, async (req, res) => {
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

userRouter.get("/users", cors(),authToken.authenticateToken, async (req, res) => {
        try {
    
            const user = await User.find({ })
    
            res.status(200).send({ results: user })
    
        } catch (e) {
            res.send(e + 'error')
        }
    
})

userRouter.get("/user/:uid", cors(),authToken.authenticateToken, async (req, res) => {
    try {
        
        const user = await User.find({ uid: req.params.uid })

        res.status(200).send({ results: user })

    } catch (e) {
        res.send(e + 'error')
    }

})
userRouter.get("/userbyemail/:email", cors(),authToken.authenticateToken, async (req, res) => {
    try {
        
        const user = await User.find({ email: req.params.email })

        res.status(200).send({ results: user })

    } catch (e) {
        res.send(e + 'error')
    }

})

userRouter.post("/userbulk", cors(),authToken.authenticateToken, async (req, res) => {
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

userRouter.post("/loginuser", cors(), authToken.authenticateToken, async (req, res) => {

        
        
    let user = await User.find({ uid: req.body.uid })
    console.log(user)
    user.last_login_date = new Date()
    
    try {
        const timeStamp = new Date()
        const responseUpdate = await User.updateOne( { uid: req.params.uid },
            { last_login_date : timeStamp })
       
       console.log("responseUpdate" + responseUpdate)

    } catch (e) {
        console.log(e)
    }
    res.status(200).send()
})

userRouter.get("/loginuser/:uid", cors(), authToken.authenticateToken, async (req, res) => {

        
        
        let user = await User.find({ uid: req.params.uid })
        console.log(user)
        user.last_login_date = new Date()
        
        try {
            const timeStamp = new Date()
            const responseUpdate = await User.updateOne( { uid: req.params.uid },
                { last_login_date : timeStamp })
           
           console.log("responseUpdate" + responseUpdate)
    
        } catch (e) {
            console.log(e)
        }
        res.status(200).send()
})



module.exports = userRouter