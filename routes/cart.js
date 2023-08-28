const express=require('express');
const router=express.Router();
const cartController=require('../controller/cart');

router.get('/cart/order',cartController.order);
router.get('/cart/getOrder',cartController.orderPage);
router.get('/cart',cartController.get);
router.get('/cart/:id',cartController.delete);

module.exports=router