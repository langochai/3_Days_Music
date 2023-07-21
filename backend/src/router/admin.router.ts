import express from "express";
import {AdminController} from "../controllers/admin/admin.controller";

const adminRouter = express.Router();

adminRouter.get("/user-list",AdminController.getUserList)
adminRouter.get("/user/:userId",AdminController.getUser)
adminRouter.delete("/user/:userId",AdminController.deleteUser)

adminRouter.get("/song/list",AdminController.getSongList)
adminRouter.get("/song/:songId",AdminController.getSong)
adminRouter.post("/song",AdminController.addSong)
adminRouter.put("/song/:songId",AdminController.updateSong)
adminRouter.delete("/song/:songId",AdminController.deleteSong)

export default adminRouter