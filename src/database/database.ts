import { connect } from "mongoose"

const authenticate = async () => {
    await connect('mongodb://localhost/countrys')
    .then(() => console.log('Connected to MongoDB Sucess!'))
    .catch((err) => console.log(err));
};

export default authenticate;