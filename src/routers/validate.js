const express = require('express')
const validateRouter = new express.Router
const cors = require('cors')

validateRouter.get("/validate", cors(), async (req, res) => {
    const validateResp = {
        AUTH_KEY: process.env.AUTH_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        JWTKEY: process.env.JWTKEY
    }

    res.status(201).send(validateResp)
})


module.exports = validateRouter