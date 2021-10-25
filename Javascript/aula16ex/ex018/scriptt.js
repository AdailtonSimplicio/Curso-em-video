// variaveis globais

let valores = []
let num = document.getElementById('numero')
let tabela = document.getElementById('seltab')
// função para adicão dos valores
function adicionar(){
    let num = document.getElementById('numero')

    if (num.value.length == 0 || num.value <= 0 || num.value > 100){
        window.alert(' Erro! Valor digitado é invalido, tente novamente digitando um número entre 1 e 100')
    } 
    else{
        let n = Number(num.value)

        if(valores.indexOf(n) != -1) {// Verifica se o número informado já está na lista
            
             window.alert('ERRO! Número já está na lista de analise.') 
        }
        else{
            
            valores.push(n) // adicionar o valor digitado ao arrey
            let item = document.createElement('option') // crias opções na tabela 
            item.text = ` Número ${n} adicionado com sucesso!`//inserir texto na option da aba select
            tabela.appendChild(item)
            resultado.innerHTML = (`${valores}`)
            }
            num.value = '' // limpar os dados do input
            num.focus() // deixar o campo num acionado
}
}
// função Finalizar
function Finalizar(){
    if(valores.length == 0){ // se não for digitado nenhum numero retorna zero
        window.alert('Adicione valores para finalizar!')

    }else{ //definindo as variaveis
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
     for(let pos in valores){ //para cada posição em valores fazer teste
         soma += valores[pos]
         if (valores[pos]> maior)
            maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
     }
     media = soma / total
    resultado.innerHTML = ""
    resultado.innerHTML += (`<p>Existem ${total} números cadastrados.</p>`) 
    resultado.innerHTML += (`<p>O maior número cadastrado é ${maior}.</p>`)// Math.max(...valores) simplificado
    resultado.innerHTML += (` <p>O menor número cadastrado é ${menor}.</p> `)// Math.min(...valores) simplificado
    resultado.innerHTML += (` <p>A soma dos números é ${soma}.</p> `)
    resultado.innerHTML += (` <p>A média dos números é ${media}.</p> `)
    
    }
}
