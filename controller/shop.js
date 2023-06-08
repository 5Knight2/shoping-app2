const path=require('path')
exports.get=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}

exports.post=(req,res,next)=>{
    let msg=    req.body;
    msg=msg.username+':- '+msg.message+"    ";
    
   
    res.redirect('/shop')
    }
