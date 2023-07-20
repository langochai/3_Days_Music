import express from "express";
import {Controller} from "../controllers/Controller";
export const router = express.Router()

router.get("/",Controller.getAll)