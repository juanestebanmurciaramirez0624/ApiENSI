import { Router } from "express";
import { getAssigns , newAssigns } from "../controllers/assigns";
import validateToken from "./validateToken";

const router = Router();

router.post('/register',validateToken, newAssigns);
router.get("/consultation",validateToken, getAssigns);

export default router;