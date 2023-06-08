const express=require('express');
const router=express.Router();
const path=require('path')
const contactcontroller=require('../controller/contact-us')

router.get('/contact-us',contactcontroller.get);

router.post('/contact-us',contactcontroller.post)
module.exports=router;