import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';
import paginate from 'mongoose-paginate-v2'


const colombiaSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]},
    domains: {type: [String]}
},
    {collection: 'colombia'}
);

colombiaSchema.plugin(paginate)
export const Colombia = model<ICountry>('Colombia', colombiaSchema);