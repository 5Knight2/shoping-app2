const path=require('path')
const Product = require('../models/product');


exports.get = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '../view/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.getproduct = (req, res, next) => {
    const id=req.params.id;
    console.log(id);
    
    {
    
      Product.getById(id,(product)=>{
     console.log(product)
     let products=[];
     products.push(product);
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
  };



exports.post=(req,res,next)=>{
    const product1=new Product(req.body.title,req.body.imageUrl,req.body.description,req.body.price);
    product1.save();

    res.redirect('/add-product')
    }