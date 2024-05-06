const http = require("http"); // importing the module

const server = http.createServer((req,res)=>{

    res.statusCode = 200; // handling incoming request ( means success )
    res.setHeader("content-type","text/plain"); // setting the content-type to text/plain
    res.end("Obvisiouly Hello World,  this is my first server "); // message to the client

});

// ab server is port aur hostname pe ise listen karega
server.listen(80,"127.0.0.1",()=>{
    console.log(`server is running at http://${"127.0.0.1"}`); // bydefault port is 80 so we dont have to mention it here
}); 


