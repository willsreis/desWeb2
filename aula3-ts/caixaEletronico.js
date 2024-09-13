"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function sacar(saqueSolicitado) {
    if (saqueSolicitado <= 0 || saqueSolicitado % 10 !== 0) {
        console.log("Valor inválido. Insira um valor múltiplo de 10.");
        return;
    }
    let nota100 = Math.floor(saqueSolicitado / 100);
    saqueSolicitado %= 100;
    let nota50 = Math.floor(saqueSolicitado / 50);
    saqueSolicitado %= 50;
    let nota10 = Math.floor(saqueSolicitado / 10);
    saqueSolicitado %= 10;
    console.log(`Notas de 100: ${nota100}, Notas de 50: ${nota50}, Notas de 10: ${nota10}`);
    // if (saqueSolicitado !==0){
    //     console.log("O valor do saque indisponivel no momento. A disponibilidade de notas é 10, 50, 100")
    // } 
}
let saqueSolicitado = Number(prompt("Digite o valor do saque: "));
sacar(saqueSolicitado);
