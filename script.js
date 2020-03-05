function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = `fotomanha.png`
        document.body.style.background = "rgba(247,217,71,0.4)"
   } else if (hora >= 12 && hora < 18){
        //Boa Tarde!
        img.src = `fototarde.png`
        document.body.style.background = "rgba(185,198,206)"
    }else {
        //Boa noite!
        img.src = `fotonoite.png`
        document.body.style.background = "rgba(23,49,75,0.7)"
    }
}
