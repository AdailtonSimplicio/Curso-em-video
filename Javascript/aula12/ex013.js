//condições multiplas switch "sever para testar dados pontuais"
var agora = new Date()

var diaSem = agora.getDay()


switch(diaSem){
    case 0:
        console.log('Domingo')
        break //não esquecer de sempre colocar o "break"
    case 1:
        console.log('Segunda-Feira')
        break 
    case 2:
        console.log('Terça-Feira')
        break       
    case 3:
        console.log('Quarta-Feira')
        break 
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break 
    case 6:
        console.log('Sabádo')
        break       
    default:
        console.log('[ERRO] Dia inválid!')
        break
}