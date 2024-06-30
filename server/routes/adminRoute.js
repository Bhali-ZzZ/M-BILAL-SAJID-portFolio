import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
import { allUsers, allcontacts, deleteUser } from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.get("/allusers", authMiddleware, adminMiddleware, allUsers);
adminRouter.get("/allcontacts", authMiddleware, adminMiddleware, allcontacts);
adminRouter.post("/deleteuser",authMiddleware,adminMiddleware,deleteUser)

export default adminRouter;
