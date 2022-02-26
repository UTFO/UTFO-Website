import Article from "../models/article.js";
import asyncWrapper from "../middleware/async.js";
import { createCustomError } from "../errors/customError.js";

export const getArticlePreviews = asyncWrapper(async (req, res) => {
  const previews = await Article.find({}, { articleContent: 0 });
  res.json({
    data: previews,
  });
});

export const getArticleFull = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  if (!article) {
    return next(createCustomError(`No post with id: ${id}`, 404));
  }
  res.status(200).json(article);
});

export const createArticle = asyncWrapper(async (req, res) => {
  const article = req.body;
  const newArticle = new Article({
    ...article,
  });
  await newArticle.save();
  res.status(201).json(newArticle);
});

export const updateArticle = asyncWrapper(async (req, res) => {
  const { id: articleID } = req.params;
  const article = await Article.findOneAndUpdate({ _id: articleID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!article) {
    return next(createCustomError(`No post with id: ${i}`, d404));
  }
  res.status(200).json(article);
});
