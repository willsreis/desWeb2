"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm i express
//npm i -D @types/node @types/express
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Olá mundo ☻☺!');
});
app.get('/tabuada/:numero', (req, res) => {
    const numero = Number(req.params.numero);
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        let result = numero * i;
        tabuada += `${numero} x ${i} = ${result}  <br> \n`;
    }
    res.send(`${numero.toFixed(2)}`);
});
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
});
