import express from "express";
import {
  getAllApplication,
  getApplicationById,
  createList,
  updateApplicationById,
  deleteApplication,
} from "../controller/controller.js";
const router = express.Router();

router.get("/job-application", getAllApplication);
router.get("/job-application/:id", getApplicationById);
router.post("/job-application/createList", createList);
router.put("/job-application/:id", updateApplicationById);
router.delete("/job-application/:id", deleteApplication);

export const jobApplicationRouter = router;
