import { Schema, model} from 'mongoose';

export interface ICountry {
    university: string
}

const brazilSchema = new Schema<ICountry>({
    university: { type: String, required: true}
},
    { collection: 'brazil'}
);

export const Brazil = model<ICountry>('Brazil', brazilSchema);