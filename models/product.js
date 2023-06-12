const fs = require('fs');
const path = require('path');

const p='./data/products.json';

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id=Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static getById(id,cb) {
    getProductsFromFile(products=>{

      const product=products.find(p=>p.id==id)
      cb(product)
    });
  }
  static replaceById(product1,cb) {
    getProductsFromFile(products=>{

      const product=products.findIndex(p=>p.id==product1.id)

      products[product].title=product1.title;
      products[product].price=product1.price;
      products[product].description=product1.description;
      products[product].imageUrl=product1.imageUrl;
      
      fs.writeFile(p,JSON.stringify(products),err=>{console.log(err)});
     cb(products)
    });
  }
  static deleteById(id,cb){
    getProductsFromFile(products=>{

      
      let productsnew=[];
      for(let i=0;i<products.length;i++){
        if(products[i].id!=id)productsnew.push(products[i])
      }
      fs.writeFile(p,JSON.stringify(productsnew),err=>{console.log(err)});
     cb(products)
    });
  }

};
