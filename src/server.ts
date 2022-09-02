import express from 'express';
import { Countries } from './models/fetchAll';
import authenticate  from './database/database';

const app = express();
const database = authenticate()
const country = new Countries;


app.use('/', [country.argentina, country.brazil, country.chile, country.suriname]);



try {
    app.listen(3000, () => {
        console.log("Server Running");
    })
} catch (error) {
    throw new Error ("error connect server")    
}