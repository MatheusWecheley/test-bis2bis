import { connect } from "mongoose"
require('dotenv/config')
const {DB_PORT,DB_HOST, DB_DATABASE} = process.env


const authenticate = async () => {
    await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`)
    .then(() => console.log('Connected to MongoDB Sucess!'))
    .catch((err) => console.log(err));
};

export default authenticate;