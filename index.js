const express=require('express');
const path = require('path')
const port= 9000;
const db=require('./config/mongoose')
const app=express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(function(req,res,next){
    req.myname='arpan'
    next()
})


var contactlist=[
    {
        name:'neha',
        age:21

    },
    {
        name:'raksha',
        age:19
    }

]

app.get('/',function(req, res){
    return res.render('home', {title:'my contact list',contactList:contactlist})
    
})
app.get('/practise',function(req, res){
    return res.render('practice', {title:'m flying'})
})
app.post('/create-contact',function(req,res){
    contactlist.push(req.body)
    return res.redirect('/')
})


app.listen(port, function(err){
    if (err){
        console.log('no');
    }
    console.log('yes');
})