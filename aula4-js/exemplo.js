const pessoa1 = {
    nome:"Pessoa1Nome",
    idade: 20,
    hobbies: ["jogar","assistir tv", "programar"]
}

console.log(pessoa1.nome)
pessoa1.cpf = 12345678910

console.log(pessoa1)

pessoa1.hobbies.push("outra atividade")

console.log(pessoa1)



function criarPessoas(nome,idade,hobbies){
    return{
        nome,
        idade,
        hobbies
    }
}
const pessoa2= criarPessoas("Nome2",25,["a","b","c"])
console.log(JSON.stringify(pessoa2))

const pessoaJson = JSON.parse('{"nome":"Nome2","idade":25,"hobbies":["a","b","c"]}')

console.log(pessoaJson)



class Pessoa{
    constructor(nome,idade,hobbies,cpf){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
        this.cpf = cpf
    }
    meApresentar(){
        console.log(`Olá meu nome é ${this.nome}!`)
    }
    anoNascimento(){
        return 2024 - this.idade
    }
}

const pessoa3 = new Pessoa("PESSOA3",70,['a','b'],12345678910)
pessoa3.idad = 10 
console.log(pessoa3)

pessoa3.meApresentar()
pessoa3.anoNascimento()