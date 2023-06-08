const express=require('express');
const router=express.Router();
const path=require('path')

router.get('/contact-us',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'))
});

router.post('/contact-us',(req,res,next)=>{
const obj=req.body;   
res.redirect('/success')
})
module.exports=router;