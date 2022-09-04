import { Router } from "express";
import { deleteUniversity, getAllUniversities, getUniversityById } from "../controller/countries";

const router = Router();

router.get('/', getAllUniversities);
router.get('/:id', getUniversityById);
router.delete('/:id', deleteUniversity)

export default router;