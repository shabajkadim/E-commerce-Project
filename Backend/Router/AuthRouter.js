import { Router } from "express";
import { Login, Register } from "../Controller/Auth.Controller.js";


const router=Router()

router.get('/register',Register)
router.get('/login',Login)

export default router