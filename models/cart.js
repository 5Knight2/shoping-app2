let fs=require('fs');
const p='./data/cart.json';
module.exports=class Cart{

    static addproduct(id, price){
        
        fs.readFile(p,(err,filedata)=>{
            let cart={products:[],totalprice:0}
            if(!err){
                cart=JSON.parse(filedata);}
                if(cart.length!=0){
                let existingindex=cart.products.findIndex(p=> p.id==id )
                let existing=cart.products[existingindex]
                if( existing){
                    cart.products[existingindex].qty=cart.products[existingindex].qty+1;

                }else{
                    let newproduct={id:id,qty:1}
                    cart.products.push(newproduct);
                }
                 }
                else {cart={products:[],totalprice:0};
                let newproduct={id:id,qty:1}
                    cart.products.push(newproduct);
            }
                cart.totalprice=cart.totalprice+ +price;
            fs.writeFile(p,JSON.stringify(cart),err=>{console.log(err)});
           
        })  
    }

    static fetch(cb){
        fs.readFile(p,(err,filedata)=>{
            filedata=JSON.parse(filedata);
            cb(filedata);
        })
    }
}