import { RequestHandler } from "express";
import { Argentina } from "../schemas/argentina/argentina";
import { Brazil } from "../schemas/brazil/brazil";
import { Chile } from "../schemas/chile/chile";
import { Colombia } from "../schemas/colombia/colombia";
import { Paraguai } from "../schemas/paraguai/paraguai";
import { Peru } from "../schemas/peru/peru";
import { Suriname } from "../schemas/suriname/suriname";
import { Uruguai } from "../schemas/uruguay/uruguay";
import { PaginationParameters} from 'mongoose-paginate-v2'

export const getAllUniversities: RequestHandler = async (req, res, next) => {
    const countries: object[] = [Brazil, Chile, Colombia, Paraguai, Suriname, Peru, Argentina, Uruguai]
    const { page, limit, country}: any = req.query;
    

    try {

        let query = {country}
        if(country) {
            query.country = { $regex: new RegExp(country), $options: "i" };
        }

        const options = {
            select: 'name country alpha_two_code',
            page: parseInt(page, 10) | 1,
            limit: parseInt(limit, 20) | 20,
        }

        const teste = await Brazil.paginate(query, options);

        const data = countries.map(async (index: any) => {
            return await index.paginate(query, options);
        })

        Promise.all(data)
        .then((value) => {
            res.json(value)
        })

    } catch (error) {
        res.json({error: 'erro get api'})
    }
}