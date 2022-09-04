import { Router } from "express";
import { createUniversity, deleteUniversity, getAllUniversities, getUniversityById, updateUniversity } from "../controller/countries";

const router = Router();

router.post('/', createUniversity)
router.get('/', getAllUniversities);
router.get('/:id', getUniversityById);
router.put('/:id', updateUniversity)
router.delete('/:id', deleteUniversity)

export default router;