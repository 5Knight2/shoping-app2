const express=require('express');
const router=express.Router();
const path=require('path')
const shopcontroller=require('../controller/shop');

router.get('/shop',shopcontroller.get);



 router.post('/shop',shopcontroller.post)

    module.exports=router;
