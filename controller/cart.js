const path=require('path')
const Cart = require('../models/cart');



exports.get = (req, res, next) => {
    
    {
    
      Cart.fetch((cart)=>{
      
        
console.log(cart)
     res.render('cart', {
       prods: cart,
       pageTitle: 'Cart',
       path: '../view/cart.ejs',
       hasProducts: cart.length > 0,
       activeShop: true,
       productCSS: true
     });
 });
 }
  };