import  express  from "express";// Serve para escutar as requisições
import { config } from "dotenv";// Serve para ler o arquivo .env

config(); // Lê o arquivo .env

const port = process.env.PORT || 5000;//Defini a porta que será usada 

const app = express(); //Criar o servidor 