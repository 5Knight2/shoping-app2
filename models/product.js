const db=require('../util/database');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products(title,price,imageurl,description) VALUES (?,?,?,?)',[this.title,this.price,this.imageUrl,this.description]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static getById(id) {
    return db.execute('SELECT * FROM products WHERE id=?',[id])
  
  }
  static replaceById(product1,cb) {
   
  }
  static deleteById(id){
    return db.execute('DELETE FROM products WHERE id=?',[id])
  }

};
