const express=require('express')
const mongoose=require('mongoose')
const order = require('./0rder')
const dining=require('./db')
const app=express()
const port=7878
const bodyParser=require('body-parser')
const cors = require("cors");
require("dotenv").config();

app.use(express.static('public'))
app.use('./css',express.static(__dirname, + 'public/css'))
app.use('./img',express.static(__dirname, + 'public/img'))
app.use('./js',express.static(__dirname, + 'public/js'))
app.use('./lib',express.static(__dirname, + 'public/lib'))
app.use('./scss',express.static(__dirname, + 'public/scss'))

app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.set('view engine','ejs')

mongoose.connect("mongodb://127.0.0.1:27017/myfinaldata").then(()=>{
    console.log("Database connected")
})

const  my= require('./0rder')

const  sc= require('./feedback')


const contact = require('./db')
const feedback = require('./feedback')

app.get('/',(_req,res)=>{
    res.render('index')
})

app.get('/about',(_req,res)=>{
    res.render('about')
})
app.get('/contact',(_req,res)=>{
    res.render('contact')
})
app.get('/booking',(_req,res)=>{
    res.render('booking')
})
app.get('/menu',(_req,res)=>{
    res.render('menu')
})

app.get('/team',(_req,res)=>{
    res.render('team')
})
app.get('/search',(_req,res)=>{
    res.render('search')
})

app.get('/team',(_req,res)=>{
    res.render('team')
})
app.get('/features',(_req,res)=>{
    res.render('features')
})
app.get('/Blog',(_req,res)=>{
    res.render('blog')
})
app.get('/Single',(_req,res)=>{
    res.render('single')
})
app.post('/onlinedata', async (req,res)=>{
   const ds= new order (req.body)
   await ds.save()
   res.render("confirmation")
})

app.post('/dining', async (req,res)=>{
   const vs= new contact(req.body)
   await vs.save()
   res.render("index")
})

app.post('/feedback', async (req,res)=>{
   const dv= new feedback(req.body)
   await dv.save()
   res.render("contact")
})



app.listen(port)
console.log("project running on port "+port)

