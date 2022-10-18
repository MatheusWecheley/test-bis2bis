import { ICountry } from "../entities/Country";


export interface IUniversity {
    save(university: ICountry): Promise<void>
    findById(id: string): Promise<ICountry>
    findByName(name: string): Promise<ICountry | null>
}