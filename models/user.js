const mongodb=require('mongodb');
const getDb=require('../util/database').getDb;

class User{
    constructor(email,mobile,name,cart,id){
this.email=email;
this.mobile=mobile;
this.name=name;
this.cart=cart;     //cart object with items array
this._id=id;
    }

    save(){
        const db=getDb();
        return db.collection('users').insertOne(this)
        .then((result)=>{console.log(result);
        return result;})
        .catch(err=>{console.log(err)})
    }

    addToCart(product){
        const db=getDb();
        let cartProducts,updatedCart;
        if(!this.cart) cartProducts=-1
        else
 cartProducts=this.cart.items.findIndex( cp=>{return cp._id.toString()==product._id.toString()})
if(cartProducts==-1){
    if(!this.cart)updatedCart={items:[{...product,quantity:1}]};
    updatedCart=this.cart;
     updatedCart.items.push({...product,quantity:1})
    
}else{
     updatedCart=this.cart;
    updatedCart.items[cartProducts].quantity++;
}
db.collection('users').updateOne({_id:new mongodb.ObjectId(this._id)},
    {$set:{cart:updatedCart}})
    }

    static findUserById(id){
       
        const db=getDb();
        return db.collection('users').findOne({ _id: new mongodb.ObjectId(id)})
        .then((result)=>{console.log(result);
        return result;})
        .catch(err=>{console.log(err)})
    }
  

}

 module.exports=User;