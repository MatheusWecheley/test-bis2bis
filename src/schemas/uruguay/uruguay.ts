import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';


const uruguaySchema = new Schema<ICountry>({
    university: { type: String, required: true}
},
    {collection: 'uruguay'}
);

export const Uruguai = model<ICountry>('Uruguay', uruguaySchema);