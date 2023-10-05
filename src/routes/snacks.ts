import { Router } from "express";
import { getSnack, newSnack } from "../controllers/snacks";
import validateToken from "./validateToken";

const router = Router();

router.post('/register',validateToken, newSnack);
router.get("/consultation",validateToken, getSnack);

export default router;