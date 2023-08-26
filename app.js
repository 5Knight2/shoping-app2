const http=require('http');
const express=require('express');

 const add_product=require('./routes/add-product');
 const shop=require('./routes/shop');
 const Delete=require('./routes/delete');
 const success=require('./routes/success');
// const cart=require('./routes/cart.js');
 const contact_us=require('./routes/contact-us');
// const user=require('./routes/user')

const app=express();
const parser=require('body-parser')
const path=require('path')

const mongoConnect=require('./util/database').mongoConnect;

var cors=require('cors')



app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname,'public')));
app.use(parser.urlencoded({extended:false}))


app.use((req,res,next)=>{
    // User.findByPk(1).then((user)=>{
    // req.user=user;
    // next();})
    // .catch(err=>{console.log(err)})
    next();
})



 app.use(add_product);
 app.use(shop);
 app.use(contact_us);
// app.use(cart);
 app.use(Delete);
 app.use(success);

// app.use(user)
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

mongoConnect(()=>{
    app.listen(8000);
});