import { match } from 'assert';
import PromptSync from 'prompt-sync'
import { validateLocaleAndSetLanguage } from 'typescript';
const prompt = PromptSync()

function sacar(saqueSolicitado: number ){
  if (saqueSolicitado <= 0 || saqueSolicitado % 10 !==0) {
    console.log("Valor inválido. Insira um valor múltiplo de 10.")
    return
  }


let nota100 = Math.floor (saqueSolicitado/100)
saqueSolicitado %=100

let nota50 = Math.floor(saqueSolicitado/50)
saqueSolicitado %= 50

let nota10 = Math.floor(saqueSolicitado/10)
saqueSolicitado %=10
console.log(`Notas de 100: ${nota100}, Notas de 50: ${nota50}, Notas de 10: ${nota10}`)


}
let saqueSolicitado = Number(prompt("Digite o valor do saque: "))
sacar(saqueSolicitado)





