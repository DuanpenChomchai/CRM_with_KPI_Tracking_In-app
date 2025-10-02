import { Router } from "express";
import { test } from "../controller/authController";

const router = Router();
router.get('/test', test);

export default router;