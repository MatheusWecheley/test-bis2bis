import { Schema, model, connect} from 'mongoose';
import { ICountry } from '../brazil/brazil';


const argentinaSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    { collection: 'argentina'}
);

export const Argentina = model<ICountry>('Argentina', argentinaSchema);