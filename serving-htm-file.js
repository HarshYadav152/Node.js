const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync("E:\\Programming\\Web development\\CSS\\basicCSS.html")

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text/html"});
    res.end(fileContent);

});
// using port other than 80 we have to explicit write it on the url 127.0.0.1:8000
server.listen(8000,"127.0.0.1",() =>{
    console.log("Listening on port 8000");
});
// using  port 80 we don't to explicit write it on the url 127.0.0.1
// server.listen(80,"127.0.0.1",() =>{
//     console.log("Listening on port 80");
// })