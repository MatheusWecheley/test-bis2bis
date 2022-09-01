import { Schema, model} from 'mongoose';
import { ICountry } from '../brazil/brazil';


const colombiaSchema = new Schema<ICountry>({
    university: { type: String, required: true}
});

export const Colombia = model<ICountry>('Colombia', colombiaSchema);