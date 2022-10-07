import { RequestHandler, response } from "express";
import fetch from 'node-fetch';
import { Country, ICountry } from "../entities/Country";


export async function fetchCountry(country: string) {
    await fetch(`http://universities.hipolabs.com/search?country=${country}`)
        .then((response: { json: () => any; }) => response.json())
        .then((response: any) => response.map(async (country: any) => {

            const countryVerify = await Country.findOne({
                name: country.name

            });
            if (!countryVerify) {
                const newCountry = new Country({
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
        const countries: string[] = ['brazil', 'chile', 'colombia', 'paraguay', 'suriname', 'peru', 'argentina', 'uruguay']

        for(var i = 0; i <= countries.length; i++) {
            await fetchCountry(countries[i]);
        }
        
        res.json({message: "Fetched universities successfully"});
        next();
    } catch (error) {
        res.json({message: 'error fetch universities', error: error});
    }

}

