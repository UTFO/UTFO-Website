import axios from "axios";

const API = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "http://localhost:8080",
});

// Get all article data to show on main article page
export const getArticlePreviews = () => API.get("/api/v1/preview");

// Get data of one single article
export const getFullArticle = (id) => API.get(`/api/v1/fullArticle/${id}`);

// Create new article
export const createArticle = (newArticle) =>
  API.post("api/v1/fullArticle", newArticle);

// Update an article
export const updateArticle = (id, article) =>
  API.patch(`/api/v1/fullArticle/${id}`, article);

export const deleteArticlePermanently = (id) =>
  API.delete(`/api/v1/fullArticle/${id}`);
