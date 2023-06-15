const path=require('path')
const Cart=require('../models/cart.js');
const Product=require('../models/product.js');
exports.get=(req,res,next)=>{

     Product.fetchAll()
     .then(([rows,fieldData])=>{
      res.render('shop', {
        prods: rows,
        pageTitle: 'Shop',
        path: '../view/shop.ejs',
        
      })}
     )
     .catch(err=>{console.log(err)})
}



exports.post=(req,res,next)=>{
    let id=req.body.productid;
    let price=req.body.price;
    console.log("id=",id)
    console.log(price)
    Cart.addproduct(id,price);

   
    res.redirect('/shop')
    }
