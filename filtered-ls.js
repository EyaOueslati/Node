var fs = require("fs");
var path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir,function (err, list) {
	
   if (err) return console.error(err);
   
   for(let i =0; i<list.length;i++){
	  if(path.extname(list[i]) === "."+ext)
		console.log(list[i]);
	} 
});


// test  node filtered-ls C:\Users\PILOT.22\Desktop\gomycode\Node txt
// result newlines.txt
//or :node filtered-ls C:\Users\PILOT.22\Desktop\gomycode\Node js
//result :baby-steps.js filtered-ls.js hello.js http-client.js make-it-modular.js my-first-async-io.js my-first-io.js