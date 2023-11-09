import  express  from "express";// Serve para escutar as requisições
import { config } from "dotenv";// Serve para ler o arquivo .env

config(); // Lê o arquivo .env

const port = process.env.PORT || 5000;//Defini a porta que será usada 

const app = express(); //Criar o servidor 
app.use(express.json());// Permite que o servidor interprete o formato JSON

app.get("/", (req, res) => {
    //Rota inicial
    res.status(200).json({massege:"Hello, World!"});

})
app.listen(port,()=>{
    //Inicia o servidor
    console.log(`⚡server started 
    on http://localhost:${port}`);
});