function verificar(){

    var data = new Date()
    var ano = data.getFullYear() // ano 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img') //iserindo imagem pelo JS
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
         }else{
             var fsex = document.getElementsByName('radsex')
             var idade = ano - Number(fano.value)
            var gênero = " "
            if (fsex[0].checked){
                gênero = 'Homem'
                    if (idade >= 0 && idade < 10){
                        //criança
                        img.setAttribute('src','criancahomem.png')

                    }else if (idade <21){
                        //jovem
            
                    }else if (idade < 50){
                        //Adulto
                    }else{
                        //idoso
                    }
                    
              } else if(fsex[1].checked){ //exibindo texto conforme marcado no radius
                gênero = 'Mulher'
              }
              res.style.textAlign = 'center' // alinhando texto 
              res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
              res.appendChild(img)
          
         }
}