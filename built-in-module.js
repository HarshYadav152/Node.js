const fs = require("fs");
let text = fs.readFileSync("E:\\Programming\\Web development\\Java Script\\NodeJS\\harsh.txt","utf-8");

text = text.replace("hello","Harsh");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("Yadav.txt",text);