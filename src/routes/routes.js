const express=require('express');
const router=express.Router()
const blogModel=require('../model/blogModel')

router.post('/post',(req,res)=>{
    const newBlog=new blogModel({
       title:req.body.title,
       content:req.body.content,
       author:req.body.author 
    })
    newBlog.save()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

router.get('/',async(req,res)=>{
    const blogs=await blogModel.find()
    res.json(blogs)
})

module.exports=router;