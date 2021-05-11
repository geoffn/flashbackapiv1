const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.apiJWT, (err, uid) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.uid = uid
    next()
  })

}

module.exports = { authenticateToken}