import { isNullishCoalesce } from "typescript";
import { Country, ICountry } from "../../entities/Country";
import { IUniversity } from "../IUniversity";


export default class MongoRepositoryImplementation implements IUniversity {
    
    async findByName(name: string): Promise<ICountry | null> {
        return await Country.findOne({name: name});
    }

    async save(university: ICountry): Promise<void> {
        await Country.create(university)
    }

    async findById(id: string): Promise<ICountry> {
        const user = await Country.findById(id)
        if(user !== null) {
            return user;
        } else{
            throw new Error("User not found!");
        }
    }
    
}