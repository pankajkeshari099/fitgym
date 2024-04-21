const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema
const postschema = new schema({
    firstname:String,
    lastname:String,
    email:String,
    message:String,
    postid:String
})

const PostModel = mongoose.model('usermessage',postschema)

router.post('/message',(req,res)=>{
    const newpost = new PostModel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        message:req.body.message,
        postid:req.body.postid
    })
    newpost.save(function(err){
        if(err)
        {
            res.send("Message Not Send Successfully")
        }
        else
        {
            res.send("Message Send Successfully")
        }
    })
})
router.get('/getmessage',(req,res)=>{
    PostModel.find({},function(docs,err){
        if(!err)
        {
            res.send(docs)
        }
        else
        {
            res.send(err)
        }
    })
})

module.exports = router

