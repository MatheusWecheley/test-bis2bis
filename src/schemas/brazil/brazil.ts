import { Schema, model, Types, PaginateModel} from 'mongoose';
import paginate from 'mongoose-paginate-v2'

export interface ICountry {
    id: string,
    country: string,
    state_province: string, 
    name: string,
    alpha_two_code: string
    web_pages: Types.Array<string>,
}

const brazilSchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    { collection: 'brazil'}
);


brazilSchema.plugin(paginate)
export const Brazil = model<ICountry, PaginateModel<ICountry>>('Brazil', brazilSchema);