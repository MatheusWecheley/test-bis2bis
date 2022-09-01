import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';

const surinameSchema = new Schema<ICountry>({
    university: { type: String, required: true}
});

export const Suriname = model<ICountry>('Suriname', surinameSchema);