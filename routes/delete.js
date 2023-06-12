const express=require('express');
const path=require('path')

const deletecontroller=require('../controller/delete');

const router=express.Router();

router.get('/delete/:id',deletecontroller.get);

module.exports=router;
