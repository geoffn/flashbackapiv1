require("dotenv").config();
require('./src/db/mongoose')
const Sentry = require("@sentry/node");
const express = require("express")
const cors = require('cors')

const app = express();

const validateRouter = require('./src/routers/validate')
const cardRouter = require("./src/routers/card")
const userRouter = require("./src/routers/user")
const cardSetRouter = require("./src/routers/cardSet")
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
Sentry.init({ dsn: "https://1494e4ef11a9416d8a14dbdb6bb8a7ac@o918401.ingest.sentry.io/5861530" });
app.use(Sentry.Handlers.requestHandler());

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
app.use(userRouter)
app.use(cardSetRouter)
app.use(validateRouter)

app.use(Sentry.Handlers.errorHandler());


//app.use('/api/user', userRouter);


app.listen(port, () => {
    console.log("server running on port " + port)
});