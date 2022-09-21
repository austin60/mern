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

//fetch all mongodb data
router.get('/',async(req,res)=>{
    const blogs=await blogModel.find()
    res.json(blogs)
})

router.put('/admin-blogs/edit/:id',async(req,res)=>{
  try{
     await blogModel.findByIdAndUpdate(req.params.id,{
        title:req.body.titleEdit,
        content:req.body.contentEdit
     })
   }catch (err){
      console.error(err.message);
      res.send(400).send('Server Error');
   }
 
})

module.exports=router;