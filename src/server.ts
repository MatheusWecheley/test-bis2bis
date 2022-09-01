import express from 'express';
import { Countries } from './models/brazil';
import authenticate  from './database/database';

const app = express();
const database = authenticate()

const country = new Countries;
app.use('/', country.argentina)
// const country = new Countries();
// country.brazil();
// country.argentina();
// country.chile();
// country.colombia();
// country.paraguai();
// country.peru();
// country.suriname();
// // country.uruguay();

try {
    app.listen(3000, () => {
        console.log("Server Running");
    })
} catch (error) {
    
}