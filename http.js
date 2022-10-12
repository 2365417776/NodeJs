//导入http模块
const http = require('http');
//创建web服务器实例
const server = http.createServer();
//为服务器绑定request事件，监听客户端的请求
server.on('request', (req, res)=>{
    console.log('欢迎访问');
    console.log(`url = ${req.url}, method = ${req.method}`)
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.end('Hello World');
});
//启动服务器
server.listen(80, ()=>{
    console.log('服务器运行');
});