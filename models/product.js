const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({
  title:{type:String,required:true},
  
  price:{type:Number,required:true},
  description:{type:String,required:true},
  imageUrl:{type:String,required:true},
  userId:{type:Schema.Types.ObjectId,
    ref:'User',
    required:true}
});

module.exports=mongoose.model('Product',productSchema)
// const mongodb = require('mongodb');
// const getDb=require('../util/database').getDb;


// class Product {
//   constructor(title,price,description,imageUrl,id,userId){
//     this.title=title;
//     this.price=price;
//     this.description=description;
//     this.imageUrl=imageUrl
//     this._id=id;
//     this.userId=userId;
//   }

//   save(){
//     const db=getDb();
//     let dbop;
//     if(this._id){
//       dbop= db.collection('products').updateOne({_id:new mongodb.ObjectId(this._id) },{$set: this});
//     }
//     else{
//       dbop= db.collection('products').insertOne(this)
//     }
    
//  return dbop
//     .then(result=>{console.log(result)
//       return result;}
//    )
//     .catch(err=>{console.log(err)})
//   }


//   static delete(id){
//     const db=getDb();
//     return db.collection('products').deleteOne({_id:new mongodb.ObjectId(id) })
//     .then(result=>{console.log(result)
//       return result;}
//    )
//     .catch(err=>{console.log(err)})
//   }

//   static fetchAll(){
//     const db=getDb();
//     return db.collection('products').find().toArray()
//     .then((products)=>{
//     console.log(products)
//     return products})
//     .catch(err=>{console.log(err)})
//   }

//   static findById(prodId){
//     const db=getDb();
//     return db.collection('products').find({ _id: new mongodb.ObjectId(prodId)}).next()
//     .then((product)=>{
//     console.log(product)
//     return product})
//     .catch(err=>{console.log(err)})
//   }


// }
// module.exports=Product;