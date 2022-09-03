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
    const { page, limit}: any = req.query;
    
    // req.query = {
    //     page: parseInt(1),
    //     limit: parseInt(10),
    //     query: {"country": "Brazil"},
    //     projection: {
    //         "country": 'brazil',
    //         "name": 1,
    // }
    // }
    

    try {
        
        var query = { name: 'brazil' }

        const options = {
            select: 'name country alpha_two_code',
            page: parseInt(page, 10) | 1,
            limit: parseInt(limit, 20) | 20,
        }

        const data = countries.map(async (index: any) => {
            return await index.paginate(query, options);
        })

        Promise.all(data)
        .then((value) => {
            res.json(value)
        })

    } catch (error) {
        console.log('erro')
    }
}