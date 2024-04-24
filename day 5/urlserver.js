import http from "http";
import url from "url";
import fs from "fs";
const server=http.createServer((req,res)=>
{
    const urlp=url.parse(req.url,true);
    if(urlp.path==="/"&&req.method==="GET")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile("index.html",(error,data)=>{
            if(error) throw error;
            res.end(data);
        });
    }
    else if(urlp.path==="/about"&&req.method==="GET")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile("about.html",(_error,data)=>{
            res.end(data);
        })
    }
    else if(urlp.path==="/contact"&& req.method==="GET")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("contact.html",(error,data)=>{
            res.end(data);
        });
    }
    else{
        res.writeHead(404,{"content-type":"error"})
        res.end("<h1>404 error </h1>");
    }
});
server.listen(5000,()=>
{
    console.log("server running at port 5000");
})