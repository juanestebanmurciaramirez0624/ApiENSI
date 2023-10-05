import { Router } from "express";
import { getUser, login, newUser } from "../controllers/user";
import validateToken from "./validateToken"; 

const router = Router();

router.post('/login', login);             
router.post('/register', validateToken, newUser);  
router.get('/consultation',validateToken, getUser);

export default router;