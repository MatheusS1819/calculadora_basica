var cont = 0
function cálculo(){    
    var n1 = window.document.getElementById("n1").value
    var n2 = window.document.getElementById("n2").value
    var sinal = window.document.getElementById("sinal")
    var mensg = window.document.getElementById("msg")
    let texto_all = window.document.getElementById("sub_titulo")
    var texto_soma = window.document.getElementById("soma")
    var texto_subt = window.document.getElementById("subt")
    var texto_mult = window.document.getElementById("mult")
    var texto_poten = window.document.getElementById("poten")
    var texto_divi = document.getElementById("divi")
    var texto_restoDivi = document.getElementById("rest")
    var soma = parseInt(n1) + parseInt(n2)
    var subtrair = parseInt(n1) - parseInt(n2)
    var multi = parseInt(n1) * parseInt(n2)
    var potenc = parseInt(n1) ** parseInt(n2)
    var dividir = parseInt(n1) / parseInt(n2)
    var resto = parseInt(n1) % parseInt(n2)
    texto_all.innerHTML = `Fazendo alguns cálculos com os números ${n1} e ${n2}! \u{1F637}`
    if(n1 == "" || n2 == ""){
        mensg.innerHTML = `Por favor preencha os dados corretamente!`
    }else{
        cont++
        texto_soma.innerHTML = `<h3>${n1} + ${n2} = ${soma}<h3>`
        if(texto_soma = `${n1} + ${n2} = ${soma}` && cont <= 1){
            // texto_soma.innerHTML = `<h3>${n1} + ${n2} = ${soma}</h3>`
            sinal.innerHTML = `+ ${cont}`
            cont++
        }else if(cont == 2){
            cont++
            texto_subt.innerHTML = `<h3>${n1} - ${n2} = ${subtrair}`
            sinal.innerHTML = `-`
        }else if(cont == 32){
            texto_mult.innerHTML = `<h3>${n1} x ${n2} = ${multi}</h3>`
            sinal.innerHTML = `x`
            texto_poten.innerHTML = `<h3>${n1} ^ ${n2} = ${potenc}</h3>`
            sinal.innerHTML = `^`
            texto_divi.innerHTML = `<h3>${n1} / ${n2} = ${dividir}</h3>`
            sinal.innerHTML = `____`
            texto_restoDivi.innerHTML = `<h3>O resto da divisão entre ${n1} // ${n2} = ${resto}</h3>`
            sinal.innerHTML = `______`
        }
    }
}
function modificarEntrou(){
    var ids = ["soma", "subt", "mult", "poten", "divi", "rest"]
    for(var i = 0; i < 6; i++){
        result = window.document.getElementById(ids[i]).style.color = "darkblue"
    }
}
function modificarSaiu(){
    var ids = ["soma", "subt", "mult", "poten", "divi", "rest"]
    for(var i = 0; i < 6; i++){
        saiu = window.document.getElementById(ids[i]).style.color = "darkred"
    }
}
function cliclou(){
    var ids = ["soma", "subt", "mult", "poten", "divi", "rest"]
    for(var i = 0; i < 6; i++){
        clicou = window.document.getElementById(ids[i]).style.color = "green"
    }
}