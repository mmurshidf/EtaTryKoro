import express from "express";
import {
    getCategory,
} from "../controllers/cat.js"

const router = express.Router();

router.get("/:id", getCategory);

export default router;