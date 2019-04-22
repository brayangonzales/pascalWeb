var fs = require('fs');
var path = require('path');
var transpiler=require('../pascal/dist/transpiler');
var readFile = function(input,output) {
    fs.readdir(input, function(err, list) {
      if(err) console.log(err);
      list.forEach(function(file) {
        file = path.resolve(input, file);
        fs.stat(file, function(err, stat) {
          if(err) console.log(err);
          if (stat && stat.isDirectory()) {
            readFile(file,output);
          } else {
            fs.readFile(file,'UTF-8',function(err,data){
              if(data.trim().length>0){
                var code= transpiler.process(data);
                fs.exists(output+"/app.js",function(exists){
                  if(exists){
                    fs.appendFile(output+"/app.js", 
                                "console.log('hola mundo');",function(err){
                      if(err) console.log(err);
                    });
                  }else{
                    fs.writeFile(output+"/app.js", 
                                "console.log('hola mundo');",function(err){
                      if(err) console.log(err);
                    });
                  }
                });
              }else
                console.log("the file is empty") 
            });
          }
        });
      });
    });
  };
  module.exports={
    readFile
  }