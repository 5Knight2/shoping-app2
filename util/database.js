const mongodb= require('mongodb');
const { get } = require('../controller/user');
const MongoClient=mongodb.MongoClient;
let _db;

const mongoConnect=(Cb)=>{
MongoClient.connect('mongodb+srv://root:Password123@cluster0.dn8re5y.mongodb.net/shop?retryWrites=true&w=majority')
.then((client)=>{console.log('connected')
db=client.db;
Cb();
})
.catch(err=>{console.log(err);})
}

const getDb=()=>{
    if(_db)return _db;
    throw 'No database found!'

}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;