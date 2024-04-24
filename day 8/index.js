let express=require('express');
const app=express();


app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('home',{name:'Aathavan',rollno:'730421245001',branch:'Computer scienceand design',college:'Erode Sengunthar Engineering College',location:'ERODE'});
});


app.listen(5000,()=>{
    console.log("surver is running in port 5000");
});