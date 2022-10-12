const path = require('path');
const pathStr = path.join('/a', '/b', '../', '/c');
console.log(pathStr);
const pathStr2 = path.join(__dirname, 'Hello.txt');
console.log(pathStr2);
console.log(path.basename(pathStr2))
console.log(path.extname(pathStr2));

let regex = new RegExp('\\d{0,2}');
let regex2 = /\d*/g;
let str = '123Hello';
console.log(regex.test(str));
console.log(regex2.test(str));