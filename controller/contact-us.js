const path=require('path')
exports.post=(req,res,next)=>{
    console.log('success');
    res.redirect('/success')

    }

 exports.get=(req,res,next)=>{
    
        res.sendFile(path.join(__dirname,'../','views','contact-us.html'))
       
    }
