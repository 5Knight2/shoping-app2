
const Product = require('../models/product');
exports.get=(req,res,next)=>{
    const id=req.params.id;
 
    // Product.findByPk(id)
    req.user.getProducts({WHERE: {id:id} })
.then((rows)=>{

    return rows[0].destroy();
    
})
.then(()=>{res.redirect('/success');})
.catch((err)=>{console.log(err)})

}