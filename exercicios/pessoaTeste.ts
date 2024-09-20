import PromptSync from 'prompt-sync'
const prompt = PromptSync()

const name = (prompt("Digite seu nome: "));
const age = Number(prompt("Digite seu nome: "));
const mail = (prompt("Digite seu nome: "));


export default class Pessoa{
    nome : string
    idade : number
    email : string
    
    constructor(nomePessoa: string,idadePessoa: number,emailPessoa: string){
        this.nome  = nomePessoa
        this.idade  = idadePessoa
        this.email  = emailPessoa

console.log(`Seu nome é ${nomePessoa}, você tem ${idadePessoa} anos e seu e-mail é ${emailPessoa}`)
    }

}

// console.log(`Seu nome é ${nomePessoa}, você tem ${idadePessoa} anos e seu e-mail é ${emailPessoa}`)
const person = new Pessoa(name,age,mail)



