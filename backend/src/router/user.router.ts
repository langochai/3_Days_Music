import express from "express";
import {SongController} from "../controllers/user/song.controller";

const userRouter = express.Router();

userRouter.get('/song/list', SongController.getSongList);
userRouter.get('/song/:songId',SongController.getSong)

export default userRouter;