import { Router } from "express";
import { getAllUniversities } from "../controller/countries";

const router = Router();

router.get('/', getAllUniversities);

export default router;