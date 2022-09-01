import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';


const uruguaiSchema = new Schema<ICountry>({
    university: { type: String, required: true}
},
    {collection: 'uruguai'}
);

export const Uruguai = model<ICountry>('Uruguai', uruguaiSchema);