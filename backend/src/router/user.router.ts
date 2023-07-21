import express from "express";
import {UserController} from "../controllers/user/user.controller";

const userRouter = express.Router();

userRouter.get('/list', UserController.getSongList);

export default userRouter;