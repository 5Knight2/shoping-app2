
const Product = require('../models/product');
exports.get=(req,res,next)=>{
    const id=req.params.id;
 
    Product.findByIdAndRemove(id)
.then(()=>{res.redirect('/success');})
.catch((err)=>{console.log(err)})

}