import { Router } from "express";
import { getAllUniversities, getUniversityById } from "../controller/countries";

const router = Router();

router.get('/', getAllUniversities);
router.get('/:id', getUniversityById);

export default router;