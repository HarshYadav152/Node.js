// Synchronous - blocking execution
// Asynchronous - non-blocking execution

// ASynchronus Call
// const fs = require("fs");
// fs.readFile("yadav.txt","utf-8",(err,data)=>{
//     console.log(data); // poori file ko read karne ke baad ye run hoga // jab tak arrow function complete nahi hoga tab code aage bhadega aur aage ka print kar dega
// });
// console.log("This is a message"); 

// here this is a message is run first before data due to asynchronous call 


//Synchronus Call
// const fs = require("fs");
// let text = fs.readFileSync("yadav.txt","utf-8");
// console.log(text);
// console.log("This is a message"); 