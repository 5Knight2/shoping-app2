const express=require('express');
const router=express.Router();
const cartController=require('../controller/cart');

router.get('/cart',cartController.get);
router.get('/cart/:id',cartController.delete);

module.exports=router