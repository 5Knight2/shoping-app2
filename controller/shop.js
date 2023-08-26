const path=require('path')
// const Cart=require('../models/cart.js');
const Product=require('../models/product.js');
// const CartItem = require('../models/cartItem.js');
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



// exports.post=(req,res,next)=>{
//  const prodId=req.body.productid;
//  let fetchedCart;
//   req.user.getCart()
//   .then((cart)=>{
//     fetchedCart=cart;
//     return cart.getProducts({where: {id:prodId}})
//   }).then((products)=>{
//  if(products[0]){
//   products[0].dataValues.cartItem.quantity= products[0].dataValues.cartItem.quantity+1;
//   return products[0].dataValues.cartItem.save();
  
//  }else {
//   return Product.findByPk(prodId).then((prod)=>{
//     return fetchedCart.addProduct(prod,{through: {quantity:1}})
//   })
  
// }
//   })
//   .catch(err=>{console.log(err)})
// }