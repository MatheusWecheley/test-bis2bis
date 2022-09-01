import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';

const paraguaiSchema = new Schema<ICountry>({
    university: { type: String, required: true}
},
    {collection: 'paraguai'}
);

export const Paraguai = model<ICountry>('Paraguai', paraguaiSchema);