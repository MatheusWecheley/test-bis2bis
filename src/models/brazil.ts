import { Argentina } from "../countries/argentina/argentina";
import { Brazil } from "../countries/brazil/brazil";
import fetch from 'node-fetch';

export class Countries {
    async brazil() {
        await fetch('http://universities.hipolabs.com/search?country=brazil')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Brazil.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Brazil({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }

    async argentina() {
        await fetch('http://universities.hipolabs.com/search?country=argentina')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Argentina.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Argentina({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }
}