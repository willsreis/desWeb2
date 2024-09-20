class Pessoa{
    nome : string
    idade : number
    email : string
    
    constructor(nomePessoa: string,idadePessoa: number,emailPessoa: string){
        this.nome  = nomePessoa
        this.idade  = idadePessoa
        this.email  = emailPessoa

    }
    apresentar(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu e-mail é ${this.email}`
    }

}

const person = new Pessoa("Joaquinzin",69,"joaq@chapeleiro.com.br")

console.log(person.apresentar())

