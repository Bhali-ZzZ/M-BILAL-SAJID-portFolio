import express from 'express';
import { registrationUser, loginUser } from '../controllers/regController.js';
// import validate from '../middlewares/validateMiddleware.js';
// import userSignup from '../Validators/userValidator.js';
import { user } from '../controllers/regController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const userRouter = express.Router();

userRouter.post("/userRegister" , registrationUser);
userRouter.post("/userLogin", loginUser);
userRouter.get("/userAuth",authMiddleware,user)

export default userRouter;
