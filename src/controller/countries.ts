import { RequestHandler } from "express";
import { Argentina } from "../schemas/argentina/argentina";
import { Brazil } from "../schemas/brazil/brazil";
import { Chile } from "../schemas/chile/chile";
import { Colombia } from "../schemas/colombia/colombia";
import { Paraguai } from "../schemas/paraguai/paraguai";
import { Peru } from "../schemas/peru/peru";
import { Suriname } from "../schemas/suriname/suriname";
import { Uruguai } from "../schemas/uruguay/uruguay";

export const getAllUniversities: RequestHandler = async (req, res, next) => {
    const countries: object[] = [Brazil, Chile, Colombia, Paraguai, Suriname, Peru, Argentina, Uruguai]

    const result: any = countries.map(async (Country: any) => {
        const allUniversities: any[] = await Country.find().limit(20);

        if (allUniversities) {
            const result = allUniversities.map((filter: any) => {
                const data = [filter.id, filter.state_province, filter.name, filter.country];
                return data;
            })
            return result;
        }
    }
    )
    const texte = await result
    Promise.all(texte)
    .then((value) => {
        res.json(value)
    });    
}