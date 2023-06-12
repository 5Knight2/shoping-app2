const express=require('express');
const router=express.Router();
const path=require('path')
const add_productcontroller=require('../controller/add-product');

router.get('/add-product',add_productcontroller.get);


router.post('/add-product/:id',add_productcontroller.post)
router.get('/add-product/:id',add_productcontroller.getproduct)
module.exports=router;