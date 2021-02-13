require("dotenv").config();
require('./src/db/mongoose')
const express = require("express")
const cors = require('cors')

const app = express();


const cardRouter = require("./src/routers/card")
//Import our user router and call
// const organizationRouter = require("./src/routers/organization");
// const eventRouter = require("./src/routers/events")
// const userRouter = require("./src/routers/user")
// //const userRouter = require("./api/user/user.router");
// var corsOptions = {
//     origin: '*',
//     optionsSuccessSatus: 200,
//     enablePreflight: true,
//     crossDomain: true
// }
// app.use(cors(corsOptions))

var corsOptions = {
    origin: '*',
    optionsSuccessSatus: 200,
    enablePreflight: true,
    crossDomain: true
}
app.use(cors(corsOptions))

// const port = 
const port = process.env.PORT || 3001

app.use(express.json())

// app.use(organizationRouter)
// app.use(eventRouter)
app.use(cardRouter)




//app.use('/api/user', userRouter);


app.listen(port, () => {
    console.log("server running on " + port)
});