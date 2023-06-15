
const Product = require('../models/product');
exports.get=(req,res,next)=>{
    const id=req.params.id;
Product.deleteById(id)
.then(([rows,fieldData])=>{
    res.redirect('/success');
})
.catch((err)=>{console.log(err)})

}