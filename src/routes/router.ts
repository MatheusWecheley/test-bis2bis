import { Router } from "express";
import { deleteUniversity, getAllUniversities, getUniversityById, updateUniversity } from "../controller/countries";

const router = Router();

router.get('/', getAllUniversities);
router.get('/:id', getUniversityById);
router.put('/:id', updateUniversity)
router.delete('/:id', deleteUniversity)

export default router;