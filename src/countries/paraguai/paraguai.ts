import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';

const paraguaiSchema = new Schema<ICountry>({
    university: { type: String, required: true}
});

export const Paraguai = model<ICountry>('Paraguai', paraguaiSchema);