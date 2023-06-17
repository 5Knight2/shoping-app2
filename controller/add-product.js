const path=require('path')
const Product = require('../models/product');
const  Sequelize  = require('sequelize');



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
      Product.findByPk(id)
      .then((rows)=>{
      
        
      
        res.render('add-product', {
          pageTitle: 'Add Product',
          prod:rows.dataValues,
          path: '../view/add-product.ejs',
          edit:true
        });
      })
    }else{
      Product.findByPk(id)
      .then((rows)=>{
        const products=[];
        products.push(rows.dataValues)
        
        res.render('shop', {
          prods: products,
          pageTitle: 'Shop',
          path: '../view/shop.ejs',
          hasProducts: products.length > 0,
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
    Product.create({
      title:req.body.title,
      price:req.body.price,
      imageUrl:req.body.imageUrl,
      description:req.body.description
    })
    .then(result=>{
      console.log('hii');
      console.log(result)
      res.redirect('/success')}
      )
    .catch(err=>{console.log(err)})
  }else{
    const id=req.body.id;
    Product.findByPk(id)
    .then(product=>{
      product.title=req.body.title
      product.price=req.body.price
      product.imageUrl=req.body.imageUrl
      product.description=req.body.description
      return product.save();
     }
      ).then(result=> {console.log('hii')
      console.log(result)
      res.redirect('/success')})

    .catch(err=>{console.log(err)})
  
    
    }
  }