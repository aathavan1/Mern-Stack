const exps = require ('express');
const path= require('path');
const ap=exps();
ap.use(exps.static(path.join(__dirname,'htm')));
ap.use(exps.static(path.join(__dirname,'asset')));
//ap.use(express.static(path.join(__dirname,'asset','be')));
ap.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'htm','in.html'));
});
ap.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'htm','about.html'));
})
ap.listen(5000,()=>
{
    console.log("server is running in port 5000");
});