import { Argentina } from "../schemas/argentina/argentina";
import { Brazil } from "../schemas/brazil/brazil";
import fetch from 'node-fetch';
import { Chile } from "../schemas/chile/chile";
import { Colombia } from "../schemas/colombia/colombia";
import { Paraguai } from "../schemas/paraguai/paraguai";
import { Peru } from "../schemas/peru/peru";
import { Suriname } from "../schemas/suriname/suriname";
import { Uruguai } from "../schemas/uruguay/uruguay";
import { RequestHandler } from "express";


export async function fetchCountry(country: string, Schema: any) {
    await fetch(`http://universities.hipolabs.com/search?country=${country}`)
        .then((response: { json: () => any; }) => response.json())
        .then((response: any) => response.map(async (country: any) => {
            const countryVerify = await Schema.findOne({
                name: country.name
            });
            if (!countryVerify) {
                const newCountry = new Schema({
                    country: country.country,
                    state_province: country.stateprovince,
                    name: country.name,
                    alpha_two_code: country.alpha_two_code,
                    web_pages: country.web_pages
                })
                await newCountry.save();
                return newCountry;
            }
        }
        ))
}

export const Countries: RequestHandler = async (req, res, next) => {
    try {
        const countriesSchema: object[] = [Brazil, Chile, Colombia, Paraguai, Suriname, Peru, Argentina, Uruguai]
        const countries: string[] = ['brazil', 'chile', 'colombia', 'paraguay', 'suriname', 'peru', 'argentina', 'uruguay']

        for(var i = 0; i <= countries.length; i++) {
            const result = await fetchCountry(countries[i], countriesSchema[i]);
        }

        res.json({message: "Fetched universities successfully"})
        next();
    } catch (error) {
        res.json({message: 'error fetch universities'})
    }

}

