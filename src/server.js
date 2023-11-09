import express from "express";// Serve para escutar as requisições
import { config } from "dotenv";// Serve para ler o arquivo .env

config(); // Lê o arquivo .env

const port = process.env.PORT || 5000;//Defini a porta que será usada 

const app = express(); //Criar o servidor 
app.use(express.json());// Permite que o servidor interprete o formato JSON

app.get("/", (req, res) => {
    const nome = req.query.nome;
    const anime = req.query.anime;
    const page = req.query.page;
    const limit = req.query.limit;
    //Rota inicial
    res.status(200).json({
        massege: nome,
        anime: anime,
        página: page,
        limite: limit
    });

})
app.get("/:nome/:sobrenome/:idade/:cidade/:serie", (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome;
    const idade = req.params.idade;
    const cidade = req.params.cidade;
    const serie = req.params.serie;


    //Rota inicial
    res.status(200).json({ massege: `Ola meu nome é ${nome} ${sobrenome}, tenho ${idade}, minha futura cidade é ${cidade}, minha série favorita é ${serie}` });

})
app.get("/:nome/:sobrenome", (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome;

    //Rota inicial
    res.status(200).json({ massege: nome, sobrenome: sobrenome });

})
app.put("/", (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    //Rota inicial
    res.status(200).json({ nomeUsario: nome, sobrenomeUsuario: sobrenome, idadeUsuario: idade });
})
app.post("/", (req, res) => {
    //Rota inicial
    res.status(200).json({ massege: "Hello, PUT!" });
})
app.delete("/", (req, res) => {
    //Rota inicial
    res.status(200).json({ massege: "Hello, DELETE!" });
})
app.listen(port, () => {
    //Inicia o servidor
    console.log(`⚡server started 
    on http://localhost:${port}`);
});