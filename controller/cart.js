const path=require('path')
const Cart = require('../models/cart');
const { error } = require('console');



exports.get = (req, res, next) => {
    
  req.user.getCart()
  .then(cart=>{
    return cart.getProducts().then((products)=>{console.log(products);
      res.render('cart', {
          
               prods: products,
               pageTitle: 'Cart',
               path: '../view/cart.ejs',
               hasProducts: products.length > 0,
               activeShop: true,
               productCSS: true
             });

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
    const id=req.params.id;  
    req.user.getCart()
    .then((cart)=>{
      cart.getProducts({where: {id:id}})
      .then((products)=>{
        if(products[0])return products[0].cartItem.destroy();
        else return error
      }).then(()=>{console.log('Deleted');
    res.redirect('/cart')})
      .catch((err)=>{console.log(err)}) 

    })
  
  }