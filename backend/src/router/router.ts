import express from "express";
import multer from "multer";
import {Controller} from "../controllers/Controller";
import FirebaseController from "../controllers/firebase.controller";

const upload = multer();
export const router = express.Router();

router.get("/", Controller.getAll);
router.post('/upload', upload.single('file'), FirebaseController.getUrlFile);

export default router;