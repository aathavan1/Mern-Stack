const fs=require("fs");
fs.appendFile("Aathav.txt","helloworld \n",(error)=>{
    if(error) throw error;

    console.log("sucess");
})


fs.readFile("Aathav.txt",(error,data)=>{

    if(error) throw error;
    console.log(data.toString());
})