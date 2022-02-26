import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/articles.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import dotenv from "dotenv";




const app = express();
dotenv.config();
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>This is a server</h1>");
});

app.use("/api/v1", router);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080

const start = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, console.log(`Server is listening at port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
