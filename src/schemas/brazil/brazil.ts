import { Schema, model, Types} from 'mongoose';

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
    name: { type: String, required: true},
    alpha_two_code: {type: String},
    web_pages: {type: [String]}
},
    { collection: 'brazil'}
);

export const Brazil = model<ICountry>('Brazil', brazilSchema);