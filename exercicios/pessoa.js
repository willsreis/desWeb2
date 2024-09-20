"use strict";
class Pessoa {
    constructor(nomePessoa, idadePessoa, emailPessoa) {
        this.nome = nomePessoa;
        this.idade = idadePessoa;
        this.email = emailPessoa;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu e-mail é ${this.email}`;
    }
}
const person = new Pessoa("Joaquinzin", 69, "joaq@chapeleiro.com.br");
console.log(person.apresentar());
