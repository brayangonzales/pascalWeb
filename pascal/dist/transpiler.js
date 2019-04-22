var lexema=require('./scanner-lexico');
var process=function(code){
  //primer paso
  var tbl_simb=lexema.lexico(code);
  console.log(tbl_simb);
}
module.exports={
    process
};