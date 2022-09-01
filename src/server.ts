import express from 'express';
import { Countries } from './models/brazil';
import authenticate  from './database/database';

const app = express();
const database = authenticate()

const country = new Countries();
country.brazil();
country.argentina();

app.listen(3000, () => {
    console.log("Server Running");
})