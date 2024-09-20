import PromptSync from 'prompt-sync'
const prompt = PromptSync()

const posicao = Number(prompt("Digite um numero positivo para referencia Fibonacci: "));


  function fibonacci(numInformado: number): number {
    if (numInformado === 0) return 0;
    if (numInformado === 1) return 1;

    let numFib1 = 0;
    let numFib2 = 1;
    let proximo = 0;

    for (let i = 2; i <= numInformado; i++) {
        proximo = numFib1 + numFib2;
        numFib1 = numFib2;
        numFib2 = proximo;
    }

    return proximo;  

}
const resultado = fibonacci(posicao);

console.log(`Saída: ${resultado}`)
