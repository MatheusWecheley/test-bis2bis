import { Schema, model, connect} from 'mongoose';
import { ICountry } from '../brazil/brazil';
const mongoosePaginate = require('mongoose-paginate-v2');


const argentinaSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    { collection: 'argentina'}
);

argentinaSchema.plugin(mongoosePaginate)
export const Argentina = model<ICountry>('Argentina', argentinaSchema);