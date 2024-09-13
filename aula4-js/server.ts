import express  from "express"
import Pessoa from "./pessoa"

const app = express()
const port = 3000



app.get('/pessoas',(req,res)=>{
    const pessoa1= new Pessoa("Will",35,["Ler manga", "programar"])
    const pessoa2= new Pessoa("Fran",30,["Assistir Serie", "Fotografar"])

    const listaPessoas = [pessoa1, pessoa2]
    res.json(listaPessoas)
})

app.listen(port,()=>{
    console.log(`API rodando em http://localost:${port}`)
})

