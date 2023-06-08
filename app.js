const http=require('http');
const express=require('express');
const add_product=require('./routes/add-product');

const shop=require('./routes/shop');
const contact_us=require('./routes/contact-us');
const app=express();
const parser=require('body-parser')
const path=require('path')


app.use(parser.urlencoded({extended:false}))
app.use(add_product);
app.use(shop);
app.use(contact_us);
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(8000);