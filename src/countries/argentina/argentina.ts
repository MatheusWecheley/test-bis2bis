import { Schema, model, connect} from 'mongoose';
import { ICountry } from '../brazil/brazil';


const argentinaSchema = new Schema<ICountry>({
    university: { type: String, required: true}
});

export const Argentina = model<ICountry>('Argentina', argentinaSchema);