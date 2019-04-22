var automata= require('../resources/automata');
var estados = ["q0","q193"];
var graf=automata.automata;
var estado_final=automata.estado_final;
var tabla_simbolos=[];
var lexico=function(code){
        var est=0;
        var estado=estados[est];
        for(var i=0;i<code.length;i++){
            if(graf.hasOwnProperty(estado)){
                    console.log(graf.hasOwnProperty(estado));
                    console.log(code.charAt(i) +" "+" estado  "+estado+" "+graf[estado][code.charAt(i)]);
                    estado=graf[estado][code.charAt(i)]+"";

                    if(estado=="undefined"){
                        estado="q193";
                    }
                        if(estado_final.hasOwnProperty(estado)){
                            console.log(estado_final[estado]["lexema"]);
                            tabla_simbolos.push(estado_final[estado]["lexema"])
                        }
                    //}else{
                      //  i--;
                    //}

               
            }else{
                estado="q0";
                i--;
            }
            
        }
    return tabla_simbolos;
}
module.exports={
    lexico
}