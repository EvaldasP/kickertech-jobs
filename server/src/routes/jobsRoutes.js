import { Router } from "express";
import jobsController from "../controllers/jobsController.js";

const router = Router();

router.get("/", jobsController.getJobs);

export default router;
