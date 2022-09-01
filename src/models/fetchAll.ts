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
                university: country.name
            });
            if (!countryVerify) {
                const newCountry = new Schema({
                    university: country.name
                })
                await newCountry.save();
                return newCountry;
            }
        }
        ))
}

export class Countries {
    brazil: RequestHandler = async (req, res, next) => {
        try {
            await fetchCountry('brazil', Brazil);
            next();
        } catch (error) {
            res.sendStatus(400)
        }
    }

    argentina: RequestHandler = async (req, res, next) => {
        try {
            await fetchCountry('argentina', Argentina);
            next();
        } catch (error) {
            res.sendStatus(400)
        }
    }

    chile: RequestHandler = async (req, res, next) => {
        try {
            await fetchCountry('chile', Chile);
            next();
        } catch (error) {
            res.sendStatus(400)
        }
    }

    suriname: RequestHandler = async (req, res, next) => {
        try {
            await fetchCountry('suriname', Suriname);
            next()
        } catch (error) {
            res.sendStatus(400)
        }
    }

    uruguay: RequestHandler = async (req, res, next) => {
        try {
            await fetchCountry('uruguay', Uruguai);
            next();
        } catch (error) {
            res.sendStatus(400)
        }
    }
}

