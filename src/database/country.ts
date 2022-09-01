import { Schema, model, connect} from 'mongoose';

interface ICountry {
    university: string
}

const countrySchema = new Schema<ICountry>({
    university: { type: String, required: true}
});

export const Country = model<ICountry>('Country', countrySchema);