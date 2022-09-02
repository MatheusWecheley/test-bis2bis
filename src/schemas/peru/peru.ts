import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';
const mongoosePaginate = require('mongoose-paginate-v2');

const peruSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    {collection: 'peru'}
);

peruSchema.plugin(mongoosePaginate)
export const Peru = model<ICountry>('Peru', peruSchema);