import projects from "../controllers/projectController.js";
import express, { Router } from 'express'

const projectRouter = express.Router()

projectRouter.get("/data",projects)

export default projectRouter