const fs=require("fs");
fs.writeFile("k.txt","helloworld",(error)=>{
    if(error) throw error;

    console.log("sucess");
})
fs.readFile("k.txt","hex",(error,data)=>{

    if(error) throw error;
    console.log(data);
})