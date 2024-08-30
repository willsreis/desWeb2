import PromptSync from "prompt-sync"

const prompt = PromptSync()

function converteCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32
    return parseFloat(fahrenheit.toFixed(1))
}

let tempCelsius = Number(prompt('Digite a temperatura em graus Celsius: '))
let temperaturaEmFahrenheit = converteCelsiusToFahrenheit(tempCelsius)

console.log(`A temperatura em graus Fahrenheit é: ${temperaturaEmFahrenheit}`)