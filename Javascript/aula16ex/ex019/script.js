
function calcular() {
    let num = document.getElementById('txtd')
    let tb = document.getElementById('seltab')

    if (num.value.length == 0){ // se não houver nada digitado cham o alerta
            window.alert (`Por favor, digite um número!`)
        
    }else {
        let n = Number (num.value)// convertendo string para numero
        let c = 1
        tb.innerHTML =""// limpar o campo antes de gerar novo calculo
            while ( c <= 10 ){
                let item = document.createElement('option') // criar opção na aba select
                item.text = ` ${n} x ${c} = ${n*c}`//inserir texto na option da aba select
                item.value = `tab${c}` // para saber qual tabela foi selecionada
                tb.appendChild(item)
                c++
        }
    }
}

