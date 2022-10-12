const customMode = require('./customModel');
const moment = require('moment');
console.log(customMode.userName);
customMode.sayHello();
let data = new Date('2020-10-12 12:10:23');
const dt = moment(data).format('YYYY年MM月DD日 HH:mm:ss');
console.log(dt);