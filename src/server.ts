import express from 'express';
import { Countries } from './models/fetchAll';
import authenticate  from './database/database';
import brazilRouter from './routes/router';

const app = express();
const database = authenticate()
const country = new Countries;


app.use('/', [country.argentina, country.brazil, country.chile, country.suriname, country.colombia, country.paraguay, country.peru, country.uruguay]);
app.use('/universities', brazilRouter);



try {
    app.listen(3000, () => {
        console.log("Server Running");
    })
} catch (error) {
    throw new Error ("error connect server")    
}