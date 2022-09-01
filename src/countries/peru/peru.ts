import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';

const peruSchema = new Schema<ICountry>({
    university: { type: String, required: true}
});

export const Peru = model<ICountry>('Peru', peruSchema);