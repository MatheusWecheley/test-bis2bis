import express from 'express';
import fetch from 'node-fetch';
import authenticate  from './database/database';

const app = express();
const database = authenticate()

const req = async () => {
    const response = await fetch('http://universities.hipolabs.com/search?country=brazil')
    .then((resposta: { json: () => any; }) => resposta.json())
    .then((resposta: any) => resposta.map((pais: any) => {
        // return console.log(pais.name);
    }))
    
}

req();

app.listen(3000, () => {
    console.log("Server Running");
})