import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';
import paginate from 'mongoose-paginate-v2'

const surinameSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    {collection: 'suriname'}
);

surinameSchema.plugin(paginate)
export const Suriname = model<ICountry>('Suriname', surinameSchema);