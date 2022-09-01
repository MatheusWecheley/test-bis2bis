import { Schema, model, connect} from 'mongoose';
import { ICountry } from '../brazil/brazil';


const argentinaSchema = new Schema<ICountry>({
    university: { type: String, required: true}
},
    { collection: 'argentina'}
);

export const Argentina = model<ICountry>('Argentina', argentinaSchema);