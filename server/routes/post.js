const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema
const postschema = new schema({
    username:String,
    email:String,
    password:String,
    phone:String,
    address:String,
    postid:String
})

const PostModel = mongoose.model('registration',postschema)

router.post('/addpost',(req,res)=>{
    const newpost = new PostModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        address:req.body.address,
        postid:req.body.postid
    })
    newpost.save(function(err){
        if(err)
        {
            res.send("Record Not Inserted")
        }
        else
        {
            res.send("Record Inserted")
        }
    })
})
router.post('/login',(req,res)=>{
PostModel.findOne({email:req.body.email ,password:req.body.password},(err,user)=>{
        if(user)
        {
            res.send(user.email)
          }
        else
        {
            res.send("Login Failed")
        }
    })
    })
router.get('/getdata',(req,res)=>{
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
//fetch by by user to show profile  
router.post('/getpostdata',(req,res)=>{
    PostModel.find({email:req.body.emailid},(docs,err)=>{
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
router.post('/deletepost',(req,res)=>{
    PostModel.findOneAndDelete({postid:req.body.postid},(err)=>{
        if(!err)
        {
            res.send("Record Delete Successfully")
        }
        else
        {
            res.send("Record Not Deleted")
        }
    })
})
// fetch user records by admin
router.post('/getuserdata',(req,res)=>{
    PostModel.find({postid:req.body.postid},(docs,err)=>{
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
router.post('/updatepost',(req,res)=>{
    PostModel.findOneAndUpdate({postid:req.body.postid},{
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        address:req.body.address
    },(err)=>{
        if(!err)
        {
            res.send("Record Update Successfully")
        }
        else{
            res.send("Record Not Updated")
        }
    })
})
module.exports = router

