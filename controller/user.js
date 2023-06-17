const Userdata=require('../models/user');
exports.get=(req,res,next)=>{
    console.log(req);
    Userdata.findAll()
    .then((users)=>{
        console.log(users)
        res.json(users)
    })
    .catch((err)=>{console.log(err)})
    

}

exports.post=(req,res,next)=>{
    console.log(req);
    Userdata.create({
        email:req.body.email,
        mobile:req.body.mobile,
        name:req.body.name})
        .then((result)=>{
            console.log(result)
            res.json()
        })
    
    }