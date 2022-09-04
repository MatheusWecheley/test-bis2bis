import { RequestHandler } from "express";
import { Argentina } from "../schemas/argentina/argentina";
import { Brazil, ICountry } from "../schemas/brazil/brazil";
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

        type Country = {
            country?: string | object,
        }

        let query: Country = {}

        if(country) {
            query.country = { $regex: new RegExp(country), $options: 'i'};
        }

        const options = {
            select: 'name country alpha_two_code',
            page: page,
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

export const getUniversityById: RequestHandler = async (req, res, next) => {
    const id  = req.params.id;
    const countries: 
    object[] = [Argentina, Chile, Colombia, Paraguai, Suriname, Peru, Brazil, Uruguai]

    try {

        countries.forEach(async (index: any ) => {
            const data = await index.findById(id)
            if(data != null) {
                res.json(data)
            }    
        })
    
    } catch (error) {
        res.json({error: 'not possible request!'})        
    }
}

export const createUniversity: RequestHandler = async(req, res, next) => {
    const {alpha_two_code, web_pages, name, country, domains, state_province} = req.body
    const countries: any = {Argentina, Chile, Colombia, Paraguai, Suriname, Peru, Brazil, Uruguai}
    

    try {
        
        if(country.toLowerCase() == 'brazil') {
            const newUniversity = new Brazil({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});

        } else if (country.toLowerCase() == 'chile') {

            const newUniversity = new Chile({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});

        }else if (country.toLowerCase() == 'argentina') {

            const newUniversity = new Argentina({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});

        } else if (country.toLowerCase() == 'colombia') {

            const newUniversity = new Colombia({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});

        } else if (country.toLowerCase() == 'peru') {
            
            const newUniversity = new Peru({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});            
        } else if (country.toLowerCase() == 'suriname') {
            
            const newUniversity = new Suriname({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});
            
        } else if (country.toLowerCase() == 'uruguay') {
            
            const newUniversity = new Uruguai({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});      

        } else if (country.toLowerCase() == 'paraguay') {
            
            const newUniversity = new Paraguai({
                alpha_two_code: alpha_two_code,
                web_pages: web_pages,
                name: name,
                country: country,
                domains: domains,
                state_province: state_province
            })
            await newUniversity.save()
            res.json({newUniversity});            
        }

    } catch (error) {
        res.json({message: 'Error in create new University', error: error})
    }



}

export const updateUniversity: RequestHandler = async(req,res, next ) => {
    const id = req.params.id;
    const {web_pages, name, domains} = req.body
    const countries: object[] = [Argentina, Chile, Colombia, Paraguai, Suriname, Peru, Brazil, Uruguai]

    try {

        countries.forEach(async (index: any ) => {
            const universityUpdate = await index.findByIdAndUpdate({_id: id}, { 
                web_pages: web_pages,
                name: name,
                domains: domains});
            if(universityUpdate ) {
                res.json({message: 'User updated success!'})
            } else {
                console.log('Collection not used')
            }
        })
    } catch (error) {
        
    }

}

export const deleteUniversity: RequestHandler = async (req, res, next) => {
    const id = req.params.id;
    const countries: object[] = [Argentina, Chile, Colombia, Paraguai, Suriname, Peru, Brazil, Uruguai]

    try {

        countries.forEach(async (index: any ) => {
            const result = await index.findByIdAndRemove({_id: id});
            if(result) {
                res.json({sucess: 'Success remove University}', id: id});
            } else {
                console.log('Collection not used');
            }
        })

    } catch (error) {
        res.json({error: error});
    }

}