const express=require('express');
const router=express.Router();
const path=require('path')

router.get('/shop',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
});



router.post('/shop',(req,res,next)=>{
    let msg=    req.body;
    msg=msg.username+':- '+msg.message+"    ";
    
   
    res.redirect('/shop')
    })

    module.exports=router;
