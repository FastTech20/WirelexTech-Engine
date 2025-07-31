import { Router } from "express";
import UserController from "../controllers/user";

//Routes for users /signup /signin
const userRouter = Router();

userRouter.post("/signup", UserController.signUp);
userRouter.post("/signin");


export default userRouter;