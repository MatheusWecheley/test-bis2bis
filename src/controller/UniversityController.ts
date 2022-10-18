import { Request, RequestHandler, response, Response } from "express";
import { UniversityError } from "../services/Excepitons/UniversityError";
import { UniversityService } from "../services/UniversityService";


export class UniversityController {

    constructor(
        private universityServices: UniversityService
    ) {}

    async saveUniversity(req: Request, res: Response): Promise<Response> {
        const { alpha_two_code, web_pages, name, country, domains, state_province} = req.body

        try {
            await this.universityServices.createUniversity({
                alpha_two_code,
                web_pages,
                name,
                country,
                domains,
                state_province
            });
            return res.json({message: "sucess"});
        }catch(error) {
            return res.status(409).json({message: error.name, error: error.message});
        }
    }
}