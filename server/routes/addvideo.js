const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer');
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        if(!fs.existsSync('public')){
            fs.mkdirSync('public');
        }
        if(!fs.existsSync('public/videos'))
        {
            fs.mkdirSync('public/videos')
        }
        cb(nul,"public/videos");
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + file.originalname)
    },
})

const upload = multer({
    storage:storage,
    fileFilter: function(req,file,cb)
    {
        var ext = path.extname(file.originalname);
        if(ext !==".mkv" && ext!==".mp4"){
            return cb(new Error("Only videos are allowed!"));
        }
        cb(null,true);
    },
})

const schema = mongoose.Schema
const postschema = new schema({
    title:String,
    description:String,
    video:String
})

const PostModel = mongoose.model('videos',postschema)

router.post('/message',(req,res)=>{
    const newpost = new PostModel({
        title:req.body.title,
        description:req.body.description,
        video:req.body.video
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

