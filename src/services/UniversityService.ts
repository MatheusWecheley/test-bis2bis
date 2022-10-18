import { Country, ICountry } from '../entities/Country';
import MongoRepositoryImplementation from '../repositories/implementation/MongoRepository';
import { IUniversity } from '../repositories/IUniversity';
import { UniversityError } from './Excepitons/UniversityError';
import { ICreateUniversityDTO } from './ICreateUniversityDTO';

export class UniversityService {
    constructor(
        private mongoRepository: IUniversity
    ) {}

    async createUniversity(university: ICreateUniversityDTO): Promise<void> {
        const findUniversity = await this.mongoRepository.findByName(university.name);

        if(!findUniversity) {
            const newUniversity = new Country(university);
            await this.mongoRepository.save(newUniversity);
        } else {
            throw new UniversityError("University has exists!");
        }
          
    }

    async findUniversityId(id: string): Promise<ICountry> { 
        return await this.mongoRepository.findById(id);
    }
}