const express=require('express');
const router=express.Router();
const path=require('path')
const successcontroller=require('../controller/success.js')

router.get('/success',successcontroller.get);


module.exports=router;