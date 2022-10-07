import { Schema, model, Model, Types } from 'mongoose';
import  paginate from 'mongoose-paginate-v2';

export interface ICountry {
    id: string,
    country: string,
    state_province: string, 
    name: string,
    alpha_two_code: string
    web_pages: Types.Array<string>,
    domains: Types.Array<string>
}

const CountrySchema = new Schema<ICountry>({
    country: {type: String},
    state_province: {type: String},
    name: { type: String},
    alpha_two_code: {type: String},
    web_pages: {type: [String]},
    domains: {type: [String]}
},
    { collection: 'country'}
);

CountrySchema.plugin(paginate)
export const Country = model<ICountry>('Country', CountrySchema);