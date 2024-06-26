const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const UserModel = require('./Models/Models')

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://aathavan:1122@cluster0.czqzplr.mongodb.net/aathavan");

app.get("/view",((req,res)=>{
    UserModel.find({}).then(function(user){
        res.json(user)
    }).catch(function(err){
            res.json(err)
    })
}))


app.listen(3001,()=>{
    console.log("Server running");
})