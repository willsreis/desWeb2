import express from 'express'


const app = express()
const port = 3000

app.get('/', (requisicao, resposta) => {
    resposta.send('Olá mundo!')
})

app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})

app.get('/teste', (requisicao, resposta) => {
    resposta.send('<h1><center>Teste</h1></center>')
})

app.get('/teste2', (requisicao, resposta) => {
    resposta.json({ msg: "Teste json|B" })
})

app.get('/tabuada', (requisicao, resposta) => {
    const numero = 3;
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        let result = numero * i
        tabuada += `${numero} x ${i} = ${result}  <br> \n`;
    }

    resposta.send(tabuada)
})
