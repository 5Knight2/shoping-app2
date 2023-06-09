const path=require('path')

const Product=require('../models/product');
exports.get=(req,res,next)=>{
    
    const products = Product.fetchall();
    console.log(products)
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '../view/shop.ejs',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}

exports.post=(req,res,next)=>{
    let msg=    req.body;
    msg=msg.username+':- '+msg.message+"    ";
    
   
    res.redirect('/shop')
    }
