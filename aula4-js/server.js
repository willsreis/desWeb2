"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pessoa_1 = __importDefault(require("./pessoa"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/pessoas', (req, res) => {
    const pessoa1 = new pessoa_1.default("Will", 35, ["Ler manga", "programar"]);
    const pessoa2 = new pessoa_1.default("Fran", 30, ["Assistir Serie", "Fotografar"]);
    const listaPessoas = [pessoa1, pessoa2];
    res.json(listaPessoas);
});
app.listen(port, () => {
    console.log(`API rodando em http://localost:${port}`);
});
