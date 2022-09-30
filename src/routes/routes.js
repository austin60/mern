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

//fetch all mongodb data
router.get('/',async(req,res)=>{
   const page=req.query.page||0;
   const ITEMS_PER_PAGE=3;
 //  const totalDocs=await blogModel.countDocuments({});
 //  const totalPages=Math.ceil(totalDocs/ITEMS_PER_PAGE)

    const blogs=await blogModel.find({$or:[{category:"Politics"},{category:"Developing"}]}).sort({date:-1}).skip((page-1 )* ITEMS_PER_PAGE).limit(ITEMS_PER_PAGE)
    res.json(blogs /* totalPages*/)
})

router.get('/sports',async(req,res)=>{
   const sports= await blogModel.find({category:"Sports"}).sort({date:-1})
   res.json(sports)
})
//route to entertainment
router.get('/entertainment',async(req,res)=>{
   const entertainment= await blogModel.find({category:"Entertainment"}).sort({date:-1})
   res.json(entertainment)
})

//route to business section
router.get('/business',async(req,res)=>{
   const business= await blogModel.find({category:"Business"}).sort({date:-1})
   res.json(business)
})

//route for every blog created
router.get('/admin-blogs',async(req,res)=>{
   const blogs= await blogModel.find({}).sort({date:-1})
   res.json(blogs)
})

//route for individual blog
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
    res.send(200).send('Blog Deleted');
   }catch(err){
    console.error(err.message);
 }
   
  })

module.exports=router;