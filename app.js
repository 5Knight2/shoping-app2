const http=require('http');
const express=require('express');

  const add_product=require('./routes/add-product');
  const shop=require('./routes/shop');
  const Delete=require('./routes/delete');
  const success=require('./routes/success');
  const cart=require('./routes/cart.js');
  const contact_us=require('./routes/contact-us');
  const user=require('./routes/user')

const app=express();
const parser=require('body-parser')
const path=require('path')
const mongoose=require('mongoose')


const User = require('./models/user');

var cors=require('cors')



app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname,'public')));
app.use(parser.urlencoded({extended:false}))


app.use((req,res,next)=>{
//    const u=new User({name:'pt',mobile:1234567890,email:'pt@pt.com',cart:{items:[]}})
//    u.save()
    User.findById('64edb090a960abfb927c8dcf')
  .then((user)=>{
        req.user=user
    next();})
    .catch(err=>{console.log(err)})

 
})



  app.use(add_product);
  app.use(shop);
  app.use(contact_us);
  app.use(cart);
  app.use(Delete);
  app.use(success);

//  app.use(user)

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

mongoose.connect('mongodb+srv://root:Password123@cluster0.dn8re5y.mongodb.net/shop?retryWrites=true&w=majority')
.then(result=>{
    app.listen(8000)
    console.log('connected')
})
.catch(err=>{console.log(err)})