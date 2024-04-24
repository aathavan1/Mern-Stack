import exp from "express";
const ap=exp();
    
     ap.use(exp.static('web'));

ap.listen(5000,()=>
{
    console.log("server is running in port 4000");
});
