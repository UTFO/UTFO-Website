import mongoose from "mongoose";

const articleScehma = new mongoose.Schema({
  title: String,
  authorName: String,
  authorImage:String,
  publishDate: String,
  articleType: String,
  imageThumbnail: String,
  articleBlurb: String,
  articleContent: String,
  specialArticle: String
});


const Article = mongoose.model("Article", articleScehma);

export default Article;
