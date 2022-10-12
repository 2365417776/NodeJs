const fs = require('fs');
const path = require('path');
fs.writeFile('Hello.txt','写入内容', 'utf-8', function(err){
    console.log(err);
});
fs.readFile(path.join(__dirname, '/File/pp.txt'), "utf-8", function(err, data){
    console.log(err);
    console.log(data);
    console.log(__dirname);
});
