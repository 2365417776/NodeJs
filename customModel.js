const userName = '小月';

function sayHello(){
    console.log("Hello World " + userName);
}
exports.userName = userName;
exports.sayHello = sayHello;
// module.exports = {
//     userName,
//     sayHello
// };