
function tabuada() {
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, insira um número!')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}` 
            tab.appendChild(item)
            c++
        }
    }
}
