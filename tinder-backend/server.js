
// App Config
const express = require('express')
const  mongoose  = require('mongoose')
const port = process.env.PORT || 8001
const app = express()
const connection_url = 'mongodb://localhost/tinder-backend'
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Middeleweares

const cardRouter = require("./routers/cardRouter")

app.use("/cardes",cardRouter)



// DB Config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

})


// API Endpoints
app.get("/" , (req,res)=> res.status(200).send("hello world"))



// listener
app.listen(port,()=>console.log(`listing on localhost:${port}`))