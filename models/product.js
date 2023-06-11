const fs=require('fs');
const path=require('path')


module.exports=class Product{
    constructor(title){
        this.title=title
    }

      save(){
        const p='./data/products.json';
       
         fs.readFile(p,(err,filedata)=>{
         
            let products=[];
            if(!err){
                products=JSON.parse(filedata);
                
            }
            products.push(this)
           
            
            fs.writeFile(p, JSON.stringify(products),err=>{
                console.log(err)});

        });
        

        
    }

    static fetchall(cb){
        
        let p='./data/products.json';
        fs.readFile(p,(err,filedata)=>{
            let products=[];
             if(!err){
                 products=JSON.parse(filedata)
                 cb(products);
             }
             else {console.log(err);
               cb([]);
             }
         })

       
    }


}