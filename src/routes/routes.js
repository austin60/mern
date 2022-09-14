const express=require('express');
const router=express.Router()
const blogTemplate=require('../model/blogModel')

router.post('/post',(req,res)=>{
    const newBlog=new blogTemplate({
       title:req.body.title,
       content:req.body.content,
       author:req.body.author 
    })
    newBlog.save()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

module.exports=router;