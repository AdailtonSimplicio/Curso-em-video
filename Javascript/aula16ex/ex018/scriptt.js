function adicionar(){
    let num = document.getElementById('numdg')
    let tb = document.getElementById('seltab')
    
    

    if (num.value.length == 0){
        window.alert('Você esqueceu de digitar um número!')
    } else if( num.value <= 0 || num.value > 100){
        window.alert('Valor digitado é invalido, tente novamente digitando um número entre 1 e 100')
    }else{


        let n = Number (num.value)
        let val = []
        let item = document.createElement('option')
        let res = document.getElementById('res')
           
            item.text = ` Valor ${n} adicionado `//inserir texto na option da aba select
            tb.appendChild(item)
            val.push(`${n}`)

        res.innerHTML = `${val}`
           

        
    }
    
}
function finalizar{

}
    