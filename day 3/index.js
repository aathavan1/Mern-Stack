const fs=require("fs");
const generateName = require('sillyname');

var sillyName = generateName();

fs.appendFile("Aathav.txt",sillyName+"\n",(error)=>{
    if(error) throw error;

    console.log("sucess");
})


fs.readFile("Aathav.txt",(error,data)=>{

    if(error) throw error;
    console.log(data.toString());
})