var automata= require('../resources/automata');
var grafo           =automata.grafo;
var estado_final    =automata.estado_final;
var estado_inicial  =automata.estado_inicial;
var tabla_simbolos  =[];
var lexico=function(codigos){
        var est =0;
        var estado=estado_inicial[est];
        var estado_sgt="";
        for(var j=0;j<codigos.length;j++){
            var codigo=codigos[j].trim();
            if(codigo.trim().toString()!=="")
                var expresion="";
                for(var i=0;i<codigo.length;i++){
                    if(grafo.hasOwnProperty(estado)){
                        console.log(i+"  "+codigo.charAt(i)+"   "+estado+"  "+grafo[estado][codigo.charAt(i)]);
                        estado=grafo[estado][codigo.charAt(i)]+"";
                        if(estado!=="undefined"){
                            expresion+=codigo.charAt(i);
                            if(estado_final.hasOwnProperty(estado)){
                                if(i+1<codigo.length){
                                    if(grafo.hasOwnProperty(estado)){
                                        estado_sgt=grafo[estado][codigo.charAt(i+1)]+"";
                                    }
                                }
                                if(estado!==estado_sgt || i===codigo.length-1){
                                   tabla_simbolos.push({
                                            lexema:estado_final[estado]["lexema"],
                                            expresion:expresion});
                                    expresion="";
                                }
                            }    
                        }else{
                            if(est<estado_inicial.length){
                                est++;
                                estado=estado_inicial[est];
                                i--;
                            }else{
                                est=0;
                                estado=estado_inicial[est];
                                console.log("caso especial");
                            }
                        }
                    }else{
                        est=0;
                        estado=estado_inicial[est];
                        i--;
                    }
                    
                }
        }

    return tabla_simbolos;
}
module.exports={
    lexico
}