function verificar(){

    var txti= document.getElementById('txti')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var msg = document.getElementById('calculo')

    if (txti.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro! Faltam dados')
    } else {
        msg.innerHTML = 'Contando...'
        let i = Number(txti.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0){
            window.alert('Passo invalido. Considerando passo = 1')
            p = 1
        }
        if (1 < f ){
            for (let c = i; c <= f; c += p){
                msg.innerHTML += `${c} \u{1F449}`
                }
        }else {
            for (let c = i; c >= f; c -= p){
                msg.innerHTML += `${c} \u{1F449}` 
            }
        }
        msg.innerHTML += 'FIM!'
    }
    
    /*for (var c = inicio; c <= fim; c += passo){
    msg.innerHTML = `${c}`
    }
    
    while (c <= fim){
        msg.innerHTML = `${c}` 
        c += passo
    }*/
    
}
