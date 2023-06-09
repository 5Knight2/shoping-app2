const fs=require('fs');


module.exports=class Product{
    constructor(title){
        this.title=title
    }

     save(){
        let a=fs.readFileSync('products.txt');
        a=a+"  .:-"+this.title;
        fs.writeFileSync('products.txt',a)
    }

    static fetchall(){
        
         let p=fs.readFileSync('products.txt')
         p=p.toString();
         p=p.split("  .:-");
         p.shift();
         console.log(p)
         return p

    }


}