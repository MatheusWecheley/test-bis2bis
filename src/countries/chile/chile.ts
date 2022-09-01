import { Schema, model} from 'mongoose';

interface ICountry {
    university: string
}

const chileSchema = new Schema<ICountry>({
    university: { type: String, required: true}
});

export const Chile = model<ICountry>('Chile', chileSchema);