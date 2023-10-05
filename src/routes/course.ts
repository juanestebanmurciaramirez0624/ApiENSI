import { Router } from "express";
import { getCourse, newCourse } from "../controllers/course";
import validateToken from "./validateToken";

const router = Router();

router.post('/register',validateToken, newCourse);
router.get("/consultation",validateToken, getCourse);

export default router;