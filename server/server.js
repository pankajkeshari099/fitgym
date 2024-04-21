const express = require('express')
const app = express()
const dbobject = require('./connection')
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

const postrouter = require('./routes/post')
app.use('/api/post',postrouter)

const messagerouter = require('./routes/messagepost')
app.use('/api/messagepost',messagerouter)

app.get('/',(req,res)=>{
    res.end("This is hello")
})
app.listen(5000,()=>{
    console.log("server started on port")
})