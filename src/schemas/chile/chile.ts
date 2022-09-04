import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';
import paginate from 'mongoose-paginate-v2'



const chileSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]},
    domains: {type: [String]}
},
    { collection: 'chile'}
);

chileSchema.plugin(paginate)
export const Chile = model<ICountry>('Chile', chileSchema);