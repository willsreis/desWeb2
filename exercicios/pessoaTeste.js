"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const name = (prompt("Digite seu nome: "));
const age = Number(prompt("Digite seu nome: "));
const mail = (prompt("Digite seu nome: "));
class Pessoa {
    constructor(nomePessoa, idadePessoa, emailPessoa) {
        this.nome = nomePessoa;
        this.idade = idadePessoa;
        this.email = emailPessoa;
        console.log(`Seu nome é ${nomePessoa}, você tem ${idadePessoa} anos e seu e-mail é ${emailPessoa}`);
    }
}
exports.default = Pessoa;
// console.log(`Seu nome é ${nomePessoa}, você tem ${idadePessoa} anos e seu e-mail é ${emailPessoa}`)
const person = new Pessoa(name, age, mail);
