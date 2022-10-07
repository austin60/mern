const express=require('express');
const router=express.Router()
const blogModel=require('../model/blogModel')


router.post('/post',(req,res)=>{
    const newBlog=new blogModel({
       title:req.body.title,
       content:req.body.content,
       author:req.body.author,
       category:req.body.category
    })
    newBlog.save()
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

//fetch all mongodb data  --use filter for categories
router.get('/',async(req,res)=>{
  // const page=req.query.page||0;
  // const ITEMS_PER_PAGE=3;
 //  const totalDocs=await blogModel.countDocuments({});
 //  const totalPages=Math.ceil(totalDocs/ITEMS_PER_PAGE)

    const blogs=await blogModel.find({/*$or:[{category:"Politics"},{category:"Developing"}]*/}).sort({date:-1})/*.skip((page-1 )* ITEMS_PER_PAGE).limit(ITEMS_PER_PAGE)*/
    res.json(blogs /* totalPages*/)
})


//route for editing individual blog
router.put('/admin-blogs/edit/:id',async(req,res)=>{
  try{
     await blogModel.findByIdAndUpdate(req.params.id,{
        title:req.body.titleEdit,
        content:req.body.contentEdit
     })
   }catch (err){
      console.error(err.message);
   }
 
})

router.delete('/admin-blogs/delete/:id',async(req,res)=>{
   try{
    await blogModel.findByIdAndDelete(req.params.id)
    res.sendStatus(200).send('Blog Deleted');
   }catch(err){
    console.error(err.message);
 }
   
  })

module.exports=router;