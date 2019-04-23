var lexema=require('./scanner-lexico');
var process=function(code){
  //primer paso
  var separators = [' ', '\n'];

  var codes = code.split(new RegExp(separators.join('|')));
  var tbl_simb=lexema.lexico(codes);
  console.log(codes);
  console.log(tbl_simb);
}
module.exports={
    process
};