import { Schema, model} from 'mongoose';

interface ICountry {
    university: string
}

const chileSchema = new Schema<ICountry>({
    university: { type: String, required: true}
},
    { collection: 'chile'}
);

export const Chile = model<ICountry>('Chile', chileSchema);