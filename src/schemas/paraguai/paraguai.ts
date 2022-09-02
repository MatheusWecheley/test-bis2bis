import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';

const paraguaiSchema = new Schema<ICountry>({
    university: { type: String, required: true}
},
    {collection: 'paraguay'}
);

export const Paraguai = model<ICountry>('Paraguay', paraguaiSchema);