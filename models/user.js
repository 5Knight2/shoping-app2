const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
  email:{type:String,required:true},
  mobile:{type:Number,required:true},
  name:{type:String,required:true},
  cart:{items:[{productId:{type:Schema.Types.ObjectId,ref:'Product',required:true},quantity:{type:Number,required:true}}]}
}
);

module.exports=mongoose.model('user',userSchema)
// const mongodb=require('mongodb');
// const getDb=require('../util/database').getDb;

// class User{
//     constructor(email,mobile,name,cart,id){
// this.email=email;
// this.mobile=mobile;
// this.name=name;
// this.cart=cart;     //cart object with items array
// this._id=id;
//     }

//     save(){
//         const db=getDb();
//         return db.collection('users').insertOne(this)
//         .then((result)=>{console.log(result);
//         return result;})
//         .catch(err=>{console.log(err)})
//     }

//     getOrders(){const db=getDb()
//         return db.collection('orders').find({userId:new mongodb.ObjectId(this._id)}).toArray()
//         .then(result=>{
//             console.log(result)
//         return result;})
//         .catch(err=>{console.log(err)})
//     }

//     addOrder(){
//         const db=getDb()
//         return db.collection('orders').insertOne({cart:this.cart,userId:this._id})
//         .then(result=>{
//             this.cart={items:[]};
//         return db.collection('users').updateOne({_id:new mongodb.ObjectId(this._id)},
//         {$set:{cart:{items:[]}}})
//         })
//         .catch(err=>{console.log(err)})
//     }

//     delete(product){   const db=getDb();
//         let updatedCart;
//         if(!this.cart) cartProducts=-1
//         else
//  updatedCart=this.cart.items.map( item=>{ 
// if(item._id.toString()==product._id.toString())
// item.quantity--
// return  item })
// updatedCart=updatedCart.filter(item=>{if(item.quantity<=0)return false
    
// return true;})
// updatedCart={items:updatedCart}
// db.collection('users').updateOne({_id:new mongodb.ObjectId(this._id)},
//     {$set:{cart:updatedCart}})
//     }

//     addToCart(product){
//         const db=getDb();
//         let cartProducts,updatedCart;
//         if(!this.cart) {cartProducts=-1,
//             updatedCart={items:[]}
//         }
//         else
//  cartProducts=this.cart.items.findIndex( cp=>{return cp._id.toString()==product._id.toString()})
// if(cartProducts==-1){
//     if(!this.cart)updatedCart={items:[{...product,quantity:1}]};
//     else{updatedCart=this.cart;
//      updatedCart.items.push({...product,quantity:1})
//     }
// }else{
//      updatedCart=this.cart;
//     updatedCart.items[cartProducts].quantity++;
// }
// db.collection('users').updateOne({_id:new mongodb.ObjectId(this._id)},
//     {$set:{cart:updatedCart}})
//     }

//     static findUserById(id){
       
//         const db=getDb();
//         return db.collection('users').findOne({ _id: new mongodb.ObjectId(id)})
//         .then(result=>{
//         console.log(result)
//         return result})
//         .catch(err=>{console.log(err)})
//     }
  

// }

//  module.exports=User;