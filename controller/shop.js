const path=require('path')
const Cart=require('../models/cart.js');
const Product=require('../models/product.js');
exports.get=(req,res,next)=>{

     Product.fetchAll((products)=>{
    console.log(products)
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '../view/shop.ejs',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
});
}



exports.post=(req,res,next)=>{
    let id=req.body.productid;
    let price=req.body.price;
    console.log("id=",id)
    console.log(price)
    Cart.addproduct(id,price);

   
    res.redirect('/shop')
    }
