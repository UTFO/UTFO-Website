import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownView from "react-showdown";
import Box from "@mui/material/Box";
import "./styles/FullArticle.css";
import TeamStructure from "./articleMarkdown/TeamStructure";

function FullArticle(props) {
  return (
    <div className="markdown">
      <TeamStructure />
    </div>
  );
}

export default FullArticle;
