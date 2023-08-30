const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const orderSchema=new Schema({

  cart:{type:String,required:true},
  userId:{type:Schema.Types.ObjectId,
    ref:'User',
    required:true}
});

module.exports=mongoose.model('Order',orderSchema)