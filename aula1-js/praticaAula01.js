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
