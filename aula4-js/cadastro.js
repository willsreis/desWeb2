"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
const pessoa1 = new pessoa_1.default("NomePessoa", 20, ["a", "b", "c"]);
console.log(pessoa1);
