const path=require('path')
const Product = require('../models/product');
const  mongodb  = require('mongodb');



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
      Product.findById(id)
      .then((rows)=>{
      
        
      
        res.render('add-product', {
          pageTitle: 'Add Product',
          prod:rows,
          path: '../view/add-product.ejs',
          edit:true
        });
      })
    }else{
    
    Product.findById(id)
    //req.user.getProducts({WHERE: {id:id} })
      .then((rows)=>{
        const products=[];
        products.push(rows)
        
        res.render('shop', {
          prods: products,
          pageTitle: 'Shop',
          path: '../view/shop.ejs',
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true
        });
      })
//       .catch(err=>{console.log(err)})
  }
   };



exports.post=(req,res,next)=>{
  const editing=req.query.edit;
  if(editing!='true'){
   // Product.create
   const product=new Product( req.body.title,req.body.price,req.body.description,req.body.imageUrl);
   product.save()
    .then(result=>{
      console.log('product created');
      console.log(result)
      res.redirect('/success')}
      )
    .catch(err=>{console.log(err)})
  }else{
      const product=new Product(req.body.title,req.body.price,req.body.description,req.body.imageUrl,new mongodb.ObjectId(req.body.id))
      return product.save()
     .then(result=> {
      console.log(result)
      res.redirect('/success')})

     .catch(err=>{console.log(err)})
  
    
    }
  }