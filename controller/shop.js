const path=require('path')
const Product=require('../models/product.js');
exports.get=(req,res,next)=>{


      Product.fetchAll()
     .then((rows)=>{
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