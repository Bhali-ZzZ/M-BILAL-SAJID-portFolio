import express from 'express'
import service from '../controllers/serviceController.js'


const serviceRouter = express.Router()

serviceRouter.get("/data",service)

export default serviceRouter