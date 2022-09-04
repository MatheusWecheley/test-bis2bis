import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';
import paginate from 'mongoose-paginate-v2'


const uruguaySchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    {collection: 'uruguay'}
);

uruguaySchema.plugin(paginate)
export const Uruguai = model<ICountry>('Uruguay', uruguaySchema);