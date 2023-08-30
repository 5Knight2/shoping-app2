const path=require('path')
const Product = require('../models/product');
const { error } = require('console');
const { getDb } = require('../util/database');



exports.get = (req, res, next) => {
  req.user.populate('cart.items.productId')
  .then(products=>{
  products=products.cart;
      res.render('cart', {
          
               prods: products,
               pageTitle: 'Cart',
               path: '../view/cart.ejs',
               hasProducts: products.length > 0,
               activeShop: true,
               productCSS: true
             })
    })
    .catch(err=>{console.log(err)})

  
  
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

    exports.order = (req, res, next) => {
    
      
        req.user.addOrder()
       .then(result=>{console.log(result)
      res.redirect('/cart/getOrders')})
      .catch(err=>{console.log(err)})
      }

      exports.orderPage = (req, res, next) => {
        
        req.user.getOrders()
        .then(Orders=>{
            res.render('orders', {
                
                     Orders: Orders,
                     pageTitle: 'Orders',
                     path: '../view/orders.ejs',
                     hasProducts: Orders.length > 0,
                     activeShop: true,
                     productCSS: true
                   });
                  })
                  .catch(err=>{console.log(err)})
                  }