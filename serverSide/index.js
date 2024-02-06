const { name } = require("ejs");

const express = require('express');//library import kiye
const app  = express();//express server ka instance banaye aur usko use karne ke lie app var used
const mongoose  = require('mongoose');
const router = express.Router();
const fs = require('fs')
const path = require('path')
const ejs  = require('ejs');
const url = "mongodb://127.0.0.1:27017/deepwork";
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
const  goalsRoute = require("./routes/enterTask");

app.use('/goals',goalsRoute);

app.use(express.static(path.join(__dirname, "/media/ashutosh/New Volume1/js/clientSide/views")));

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'../clientSide/views/home.html'))
    
})

mongoose
.connect(url,{
    dbName: "deepwork",
})
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log("server running");

})
