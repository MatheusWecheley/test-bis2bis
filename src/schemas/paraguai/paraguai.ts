import { Schema, model, PaginateModel} from 'mongoose';
import { ICountry } from '../brazil/brazil';
import paginate from 'mongoose-paginate-v2'

const paraguaiSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    {collection: 'paraguay'}
);

paraguaiSchema.plugin(paginate)
export const Paraguai = model<ICountry, PaginateModel<ICountry>>('Paraguay', paraguaiSchema);