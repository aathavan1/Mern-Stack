const express = require ('express');
const path= require('path');
const app=express();


app.use(exps.static(path.join(__dirname,'htm')));


app.use(exps.static(path.join(__dirname,'asset')));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'htm','in.html'));
});


app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'htm','about.html'));
})

app.listen(5000,()=>{
    console.log("server is running in port 5000");
});