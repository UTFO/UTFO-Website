import express from "express";
import {
  getArticlePreviews,
  getArticleFull,
  createArticle,
  updateArticle,
  deleteArticle
} from "../controllers/articles.js";
const router = express.Router();

// Only get article previews 
router.get("/preview", getArticlePreviews);
router.get("/fullArticle/:id", getArticleFull);
router.post("/fullArticle", createArticle)
router.patch("/fullArticle/:id", updateArticle);
router.delete("/fullArticle/:id", deleteArticle);


export default router;
