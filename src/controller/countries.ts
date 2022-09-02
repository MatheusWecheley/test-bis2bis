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
    const { page = 1, limit = 10}: any = req.query;
    try {
        const data = await Brazil.find()
        .limit((limit * 1))
        .skip((page - 1) * limit)
        .exec()

        const count = await Brazil.countDocuments();

        res.json({
            data,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        })

    } catch (error) {
        console.log('erro')
    }
}