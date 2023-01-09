function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var msg = window.document.getElementById('msg')
    var fano = window.document.getElementById('txtano')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <12){
                //criança
                img.setAttribute('src', 'criançamasc.jpg')
            }
            else if (idade <= 18){
                //adolescente
                img.setAttribute('src', 'adolecentemasc.jpg')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <12){
                //criança
                img.setAttribute('src', 'criançafem.jpg')
            }
            else if (idade <= 18){
                //adolescente
                img.setAttribute('src', 'adolecentefem.jpg')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos`
        msg.appendChild(img)
    }
}