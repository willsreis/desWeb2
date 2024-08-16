import PromptSync from "prompt-sync"
const prompt = PromptSync()

let fatorMultip = Number(prompt('Digite o valor a ser multiplicado: '))
let result = 0

for (let i =0; i <= 10; i++){
    result = fatorMultip * i
    console.log(` ${fatorMultip} x ${i} = ${result}`)
}
