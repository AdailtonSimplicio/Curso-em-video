let a =[ 15,  18,  20] // adicionando + de um valor a variavel
//a [3]= 16   // alterando valor da variavel e posição
//a.push(9)   // // adicicionar valor na ultma posição
//a.length // contar quantos elemento tem na variavel a
//a.sort() // organiza valores do menor para maior
let pos = a.indexOf(8) //busca o valor no vetor, sernão houver nenhum valor mencionando retorna -1 o OF é maiusculo
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(` O valor 15 esta na posição ${pos}`)
}

console.log(` O vetor tem ${a.length} posições`)
console.log(` O primeiro valor do vetor é ${a[0]}`)