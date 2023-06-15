const path=require('path')
const Product = require('../models/product');


exports.get = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '../view/add-product',
      edit:false
    });
  };

exports.getproduct = (req, res, next) => {
    const id=req.params.id;
    
    const editing=req.query.edit;
    console.log(editing)

    if(editing=='true'){
   
      Product.getById(id)
      .then(([rows,fieldData])=>{
        res.render('add-product', {
          pageTitle: 'Add Product',
          prod:rows[0],
          path: '../view/add-product.ejs',
          edit:true
        });
      })
    }else{
      Product.getById(id)
      .then(([rows,fieldData])=>{
        res.render('shop', {
          prods: rows,
          pageTitle: 'Shop',
          path: '../view/shop.ejs',
          hasProducts: rows.length > 0,
          activeShop: true,
          productCSS: true
        });
      })
      .catch(err=>{console.log(err)})
 }
  };



exports.post=(req,res,next)=>{
  const editing=req.query.edit;
  if(editing!='true'){
    const product1=new Product(req.body.title,req.body.imageUrl,req.body.description,req.body.price);
    product1.save().then(()=>{res.redirect('/add-product')})
    .catch((err)=>{console.log(err)})
    
  }else{
    const id=req.body.id;
    const product1=new Product(req.body.title,req.body.imageUrl,req.body.description,req.body.price);
    product1.id=id;
    Product.replaceById(product1,(product)=>{     
      res.redirect('/shop')
  })
    
    }
  }