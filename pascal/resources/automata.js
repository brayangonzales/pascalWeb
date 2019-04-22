const automata={
    q0:{"i":"q1","r":"q8","c":"q12","b":"q16","s":"q23","v":"q29","p":"q32","e":"q43"},q1:{"n":"q2"},q2:{"t":"q3"},q3:{"e":"q4"},q4:{"g":"q5"},q5:{"e":"q6"},q6:{"r":"q7"},
    q8:{"e":"q9"},q9:{"a":"q10"},q10:{"l":"q11"},
    q12:{"h":"q13"},q13:{"a":"q14"},q14:{"r":"q15"},
    q16:{"o":"q17","e":"q39"},q17:{"o":"q18"},q18:{"l":"q19"},q19:{"e":"q20"},q20:{"a":"q21"},q21:{"n":"q22"},
    q23:{"t":"q24"},q24:{"r":"q25"},q25:{"i":"q26"},q26:{"n":"q27"},q27:{"g":"q28"},
    q29:{"a":"q30"},q30:{"r":"q31"},
    q32:{"r":"q33"},q33:{"o":"q34"},q34:{"g":"q35"},q35:{"r":"q36"},q36:{"a":"q37"},q37:{"m":"q38"},
    q39:{"g":"q40"},q40:{"i":"q41"},q41:{"n":"q42"},
    q43:{"n":"q44"},q44:{"d":"q45"},

    q193:{"az":"q194"},q194:{"az09":"q194"}
}
const estado_final={
    q7:{"lexema":"integer"},
    q11:{"lexema":"real"},
    q15:{"lexema":"char"},
    q22:{"lexema":"boolean"},
    q28:{"lexema":"string"},
    q31:{"lexema":"var"},
    q38:{"lexema":"program"},
    q42:{"lexema":"begin"},
    q45:{"lexema":"end"},
    q194:{"lexema":"ident"}
}
module.exports={
    automata, estado_final

}