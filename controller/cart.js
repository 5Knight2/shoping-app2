const path=require('path')
const Product = require('../models/product');
const { error } = require('console');



exports.get = (req, res, next) => {
  let products;
  if(!req.user.cart){products={items:[]}}
  else{
 products={...req.user.cart};
  }
  
      res.render('cart', {
          
               prods: products,
               pageTitle: 'Cart',
               path: '../view/cart.ejs',
               hasProducts: products.length > 0,
               activeShop: true,
               productCSS: true
             });

  
  
//       Cart.fetch((cart)=>{
      
        
// console.log(cart)
//      res.render('cart', {
//        prods: cart,
//        pageTitle: 'Cart',
//        path: '../view/cart.ejs',
//        hasProducts: cart.length > 0,
//        activeShop: true,
//        productCSS: true
//      });
//  });
 
  };

  exports.delete = (req, res, next) => {
    const prodId=req.params.id;  
    const product=Product.findById(prodId)
    .then((product)=>{
     return req.user.delete(product)})
     .then(result=>{console.log(result)})
    .catch(err=>{console.log(err)})
    }