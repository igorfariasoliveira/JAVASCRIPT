function carregar(){
    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        texto.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'manhã.jpg'
        document.body.style.background = '#69889C'
    } else if (hora >= 12 && hora < 18) {
        texto.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src= 'tarde.jpg'    
        document.body.style.background = '#A62F03'
    }
    else {
        texto.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = 'noite.jpg'
        document.body.style.background = '#0F2426'
    }
}