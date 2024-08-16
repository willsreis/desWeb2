console.log('Olá mundo')

const a = 10
let b = 20

const total = a + b
console.log(total)


if(total > 30 ){

    console.log('Total maior que 30')
} else {
    console.log('total menor ou igual a 30')
}


const dia = 'segunda'

switch (dia.toLowerCase()) {
    case 'segunda':
        console.log('aberto')
        break;
    case 'sabado':
        console.log('fechado')
        break;
    default:
        console.log('meio aberto')
        break;
}

let idade = 18
let podeBeber = idade >= 18 ? ' Pode bebe' : 'Não pode'
console.log(podeBeber)

if(idade >= 18){
    podeBeber = 'Pode beber'
} else {
    podeBeber = 'Não pode'
}

const maiorIdade = true
const temCarteiraTrab = true

const podeAplicarVaga = maiorIdade && temCarteiraTrab


for (let i =0; i <= 10; i++){
    console.log(i)
}

console.log('###############')

// let peso = 10
// while (peso > 0.8) {
//     peso = peso * 0.8
//     console.log(peso)
    
// }

console.log('###############')

// let total = 0;

// do {
//     total = total +1
//     console.log
// }
// console.log('###############')

//modo antigo de usar modulo
// const prompt = require('prompt-sync')()

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let saldo = Number(prompt('Digite o saldo inicial: '))
const juros = Number(prompt('Digite o valor da taxa: '))
const totalSaldo = saldo * 3 
let mes = 0

while (saldo < totalSaldo) {
    saldo += (saldo * juros )
    mes += 1
    console.log(`mes ${mes} com saldo total de: ${saldo}`)
}
console.log(`total de meses ${mes} com saldo total de: ${saldo}`)
