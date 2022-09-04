import express from 'express';
import { Countries } from './models/fetchAll';
import authenticate  from './database/database';
import countriesRouter from './routes/router';
import bodyParser from 'body-parser';

const app = express();
const database = authenticate()
const country = new Countries;



app.use(bodyParser.json());
app.use(express.json())

app.use('/populate', [country.argentina, country.brazil, country.chile, country.suriname, country.colombia, country.paraguay, country.peru, country.uruguay]);
app.use('/universities', countriesRouter);



try {
    app.listen(3000, () => {
        console.log("Server Running");
    })
} catch (error) {
    throw new Error ("error connect server")    
}