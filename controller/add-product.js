const path=require('path')
const Product = require('../models/product');

exports.get=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
}

exports.getproduct = (req, res, next) => {
    const products = Product.fetchall();
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '../view/shop.ejs',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  };



exports.post=(req,res,next)=>{
    const product1=new Product(req.body.product_name);
    product1.save();

    res.redirect('/add-product')
    }