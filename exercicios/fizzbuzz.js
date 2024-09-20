"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const validar = Number(prompt("Digite um numero inteiro positivo validação: "));
function fizzbuzz(n) {
    if (n === 0) {
        console.log("Zero não é considerado valor positivo");
    }
    ;
    if (n < 0) {
        console.log("Favor informar valor positivo");
    }
    ;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        else
            console.log(i);
    }
}
const result = fizzbuzz(validar);
