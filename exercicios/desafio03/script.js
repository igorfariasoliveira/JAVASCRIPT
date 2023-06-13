let num = window.document.getElementById('numero')
let seletor = window.document.getElementById('tela')
let texto = window.document.getElementById('txt')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        seletor.appendChild(item)
        texto.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja encrontrado na lista')
    }
    num.value =''
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adcione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        texto.innerHTML = ''
        texto.innerHTML += `<p> Ao todo temos ${tot} números de elementos.</p>` 
        texto.innerHTML += `<p> O maior valor informado é ${maior}.</p>`
        texto.innerHTML += `<p> O menor valor informado é ${menor}.</p>`
        texto.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        texto.innerHTML += `<p> A média, arredondada dos valores digitados é ${media.toFixed(1)}</p>`
    }
}