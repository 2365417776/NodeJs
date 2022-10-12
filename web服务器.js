const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
server.on('request', function(req, res){
    const url = req.url;
    let fPath = '';
    if(url === '/'){
        fPath = path.join(__dirname, './clock/index.html')
    }else {
        fPath = path.join(__dirname, '/clock', url)
    }
    fs.readFile(fPath, 'utf8', (err, data)=>{
        if(err){
            res.end(err.message);
            return false;
        }
        res.end(data);
    });
});
server.listen(80, function(){
    console.log('服务器启动 http://127.0.0.1');
});