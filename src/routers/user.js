const express = require('express')
const userRouter = new express.Router
const User = require('../models/user')
const cors = require('cors')
const authToken = require('../helpers/token')
const Sentry = require('@sentry/node')


userRouter.post("/user", cors(), authToken.authenticateToken, async (req, res) => {
    const user = new User({
        ...req.body
    })

    //See if user exists.  If not create and return user.  Otherwise update and return user.
    try {
        let existingUser = await User.find({ uid: req.body.uid })
        if(existingUser.uid){
            const timeStamp = new Date()

            existingUser.email = req.body.email
            existingUser.display_name = req.body.display_name
            existingUser.photo_url = req.body.photo_url
            existingUser.last_login_date = timeStamp

            existingUser.save()
            console.log('ExistingUser: ' + req.body)

            res.status(200).send(existingUser)
            next()

        } else {
            await user.save()

            console.log('NewUser: ' + req.body)

            res.status(201).send(user)
            next()
        }

    } catch(e){
        console.log(e)
        res.send('Error: ' + e)
    }


    res.status(500).send(user)
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
        const responseUpdate = await User.updateOne( { uid: req.body.uid },
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