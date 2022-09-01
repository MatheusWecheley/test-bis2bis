import { Argentina } from "../countries/argentina/argentina";
import { Brazil } from "../countries/brazil/brazil";
import fetch from 'node-fetch';
import { Chile } from "../countries/chile/chile";
import { Colombia } from "../countries/colombia/colombia";
import { Paraguai } from "../countries/paraguai/paraguai";
import { Peru } from "../countries/peru/peru";
import { Suriname } from "../countries/suriname/suriname";
import { Uruguai } from "../countries/uruguay/uruguay";

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

    async chile() {
        await fetch('http://universities.hipolabs.com/search?country=chile')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Chile.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Chile({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }

    async colombia() {
        await fetch('http://universities.hipolabs.com/search?country=colombia')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Colombia.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Colombia({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }

    async paraguai() {
        await fetch('http://universities.hipolabs.com/search?country=paraguai')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Paraguai.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Paraguai({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }

    async peru() {
        await fetch('http://universities.hipolabs.com/search?country=peru')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Peru.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Peru({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }

    async suriname() {
        await fetch('http://universities.hipolabs.com/search?country=suriname')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Suriname.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Suriname({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }

    async uruguay() {
        await fetch('http://universities.hipolabs.com/search?country=uruguay')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Uruguai.findOne({
                    university: country.name
                });
                if (countryVerify) {
                    throw new Error('Univeristy has existed');
                }
                const newCountry = new Uruguai({
                    university: country.name
                })
                await newCountry.save();
                return console.log(newCountry);
            }))
    }
}