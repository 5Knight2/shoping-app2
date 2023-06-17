
const Product = require('../models/product');
exports.get=(req,res,next)=>{
    const id=req.params.id;
Product.findByPk(id)
.then((rows)=>{

    return rows.destroy();
    
})
.then(()=>{res.redirect('/success');})
.catch((err)=>{console.log(err)})

}