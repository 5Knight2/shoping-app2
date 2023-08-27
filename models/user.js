const mongodb=require('mongodb');
const getDb=require('../util/database').getDb;

class User{
    constructor(email,mobile,name,id){
this.email=email;
this.mobile=mobile;
this.name=name;
this.id=id;
    }

    save(){
        const db=getDb();
        return db.collection('users').insertOne(this)
        .then((result)=>{console.log(result);
        return result;})
        .catch(err=>{console.log(err)})
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