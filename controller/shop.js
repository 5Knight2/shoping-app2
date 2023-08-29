const path=require('path')
const User=require('../models/user');
const Product=require('../models/product.js');

const mongoose = require('mongoose');

 
exports.get=(req,res,next)=>{


      Product.find()
      // .select('title _id price').populate('userId')
     .then((rows)=>{
      console.log(mongoose.version);
      console.log(rows[0])
      res.render('shop', {
        prods: rows,
        pageTitle: 'Shop',
        path: '../view/shop.ejs',
        
      })}
     )
     .catch(err=>{console.log(err)})
}



exports.post=(req,res,next)=>{
 const prodId=req.body.productid;
 const product=Product.findById(prodId)
 .then((product)=>{
  return req.user.addToCart(product)})
  .then(result=>{console.log(result)
  return result;})
 .catch(err=>{console.log(err)})
}