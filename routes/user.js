const express=require('express');
const router=express.Router();
const usercontroller=require('../controller/user');

router.post('/user',usercontroller.post);


router.get('/user',usercontroller.get);

module.exports=router;