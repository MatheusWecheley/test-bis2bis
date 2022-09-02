import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';

const surinameSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    {collection: 'suriname'}
);

export const Suriname = model<ICountry>('Suriname', surinameSchema);