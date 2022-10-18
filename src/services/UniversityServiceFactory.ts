import { UniversityController } from "../controller/UniversityController";
import MongoRepositoryImplementation from "../repositories/implementation/MongoRepository"
import { UniversityService } from "./UniversityService";


export const universityServiceFactory = () => {
    const mongoRepository = new MongoRepositoryImplementation();
    const universityService = new UniversityService(mongoRepository);
    const universityController = new UniversityController(universityService);
    return universityController;
}