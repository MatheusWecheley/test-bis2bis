import { Argentina } from "../countries/argentina/argentina";
import { Brazil } from "../countries/brazil/brazil";
import fetch from 'node-fetch';
import { Chile } from "../countries/chile/chile";
import { Colombia } from "../countries/colombia/colombia";
import { Paraguai } from "../countries/paraguai/paraguai";
import { Peru } from "../countries/peru/peru";
import { Suriname } from "../countries/suriname/suriname";
import { Uruguai } from "../countries/uruguay/uruguay";
import { RequestHandler } from "express";


export async function fetchCountry(country: string, Schema: any) {
    try {
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
    } catch (error) {
        console.log(error)
    }
}

export class Countries {
    brazil: RequestHandler = async (req,res, next) => {
        fetchCountry('brazil', Brazil);
        res.json('teste')
    }

    argentina: RequestHandler = async(req,res,next) => {
        try {
            await fetch('http://universities.hipolabs.com/search?country=argentina')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Argentina.findOne({
                    university: country.name
                });
                if (!countryVerify) {
                    const newCountry = new Argentina({
                        university: country.name
                    })
                    await newCountry.save();
                    return newCountry;
                }
            },
            res.json(`sucess`)
            ))
        } catch (error) {
            res.send(400)
        }
    }

    chile: RequestHandler = async (req, res, next) => {
        try {
            await fetch('http://universities.hipolabs.com/search?country=chile')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Chile.findOne({
                    university: country.name
                });
                if (!countryVerify) {
                    const newCountry = new Chile({
                        university: country.name
                    })
                    await newCountry.save();
                    return newCountry;
                }
            },
            res.json(`sucess`)
            ))
        } catch (error) {
            res.send(400)
        }
    }

    suriname: RequestHandler = async (req, res, next) => {
        try {
            await fetch('http://universities.hipolabs.com/search?country=suriname')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Suriname.findOne({
                    university: country.name
                });
                if (!countryVerify) {
                    const newCountry = new Suriname({
                        university: country.name
                    })
                    await newCountry.save();
                    return newCountry;
                }
            },
            res.json(`sucess`)
            ))
        } catch (error) {
            res.send(400)
        }
    }

     uruguay: RequestHandler = async(req, res, next) => {
        try {
            await fetch('http://universities.hipolabs.com/search?country=uruguay')
            .then((response: { json: () => any; }) => response.json())
            .then((response: any) => response.map(async (country: any) => {
                const countryVerify = await Uruguai.findOne({
                    university: country.name
                });
                if (!countryVerify) {
                    const newCountry = new Uruguai({
                        university: country.name
                    })
                    await newCountry.save();
                    return newCountry;
                }
            },
            res.json(`sucess`)
            ))
        } catch (error) {
            res.send(400)
        }
    }
}