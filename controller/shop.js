const path=require('path')

const Product=require('../models/product.js');
exports.get=(req,res,next)=>{
    
     Product.fetchall((products)=>{
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
    let msg=    req.body;
    msg=msg.username+':- '+msg.message+"    ";
    
   
    res.redirect('/shop')
    }
