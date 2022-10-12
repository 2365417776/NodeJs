const fs = require('fs');
fs.readFile('成绩.txt', 'utf-8', function(err, data){
    if(!err){
        let data_ok = data.split(' ');
        let data_New = [];
        let data_Old;
        data_ok.forEach((items, index) => {
            data_Old = items.replace('=', ':');
            console.log(data_Old);
            data_New.push(data_Old);
        });
        data_New = data_New.join('\r\n');
        fs.writeFile('成绩-ok.txt', data_New, 'utf-8', function(err){
            if(!err){
                console.log('写入成功');
            }
        });
    }
})