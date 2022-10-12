const path = require('path');
const fs = require('fs');
// <style></style>
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;
fs.mkdir(path.join(__dirname, 'clock'), function(err){
    if(err){
        console.log(err.message);
        return false;
    }
})
fs.readFile(path.join(__dirname, 'File/index.html'), 'utf8', function(err, data){
    if(err){
        console.log('读取失败' + err.message);
    }else {
        styleSplit(data);
        scriptSplit(data);
        htmlSplit(data);
    }
})

function styleSplit(data){
    let style = regStyle.exec(data);
    style = style[0].replace('<style>', '').replace('</style>', '');
    fs.writeFile(path.join(__dirname, 'clock/base.css'), style, 'utf8', function(err){
        if(err){
            console.log(err);
            return false;
        }
        console.log('写入成功')
    })
}
function scriptSplit(data){
    let script = regScript.exec(data);
    script = script[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, 'clock/base.js'), script, 'utf8', function(err){
        if(err){
            console.log(err);
            return false;
        }
        console.log('写入成功')
    })
}

function htmlSplit(data){
    let html = data.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, 'clock/index.html'), html, 'utf8', function(err){
        if(err){
            console.log(err.message);
            return false;
        }
        console.log('写入成功')
    })
}