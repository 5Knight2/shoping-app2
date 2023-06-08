const path=require('path')
exports.get=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','success.html'))
}