
const Product = require('../models/product');
exports.get=(req,res,next)=>{
    const id=req.params.id;
Product.deleteById(id,(products)=>{

console.log('success')
})

}