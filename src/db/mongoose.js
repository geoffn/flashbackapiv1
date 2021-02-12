const mongoose = require('mongoose')

const mongooseConnect = process.env.MONGOOSE_CONNECT

mongoose.connect(mongooseConnect, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
 })


