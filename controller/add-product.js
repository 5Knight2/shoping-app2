const path=require('path')

exports.get=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
}

exports.post=(req,res,next)=>{
    const obj=req.body;   
    res.redirect('/add-product')
    }