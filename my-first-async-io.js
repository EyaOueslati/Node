var fs = require("fs");
const data = fs.readFile(process.argv[2],{encoding: "utf8"},function(err,data){
   if (err) return console.error(err);
   console.log(data.split("\n").length-1)
})

//to test press node my-first-io newlines.txt 
// result : 8