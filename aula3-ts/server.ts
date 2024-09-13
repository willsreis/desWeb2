//npm i express
//npm i -D @types/node @types/express
import express from 'express'
import { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
    res.send('Olá mundo ☻☺!')
})
app.get('/tabuada/:numero', (req:Request, res:Response) => {
    const numero =Number ( req.params.numero)
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        let result = numero * i
        tabuada += `${numero} x ${i} = ${result}  <br> \n`;
    }
    res.send(`${numero.toFixed(2)}`)
})
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})