var compiler = require('../pascal/compiler');
var fs= require('fs');
var path= require('path');
if(fs.existsSync(process.cwd()+"/app.js")) 
    fs.truncate(process.cwd()+"/app.js",function(err){
        if(err) console.log(err);
    })
var config= JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var input=path.resolve(config.source);
var output=path.resolve(config.outputPath);
compiler.readFile(input,output);


