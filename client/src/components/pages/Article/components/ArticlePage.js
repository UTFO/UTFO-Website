import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getFullArticle } from "../api";
import { renderer } from "./specialArticleData";
import {
  HeaderContainer,
  AuthorContainer,
  ShortDivider,
  Title,
  Tag,
  SubtitleContainer,
  VerticalDivider,
  Subtitle,
} from "./styles/ArticlePageStyles";
import stockAuthorImage from "./images/stockAuthorImage.png"
import "./styles/ArticlePage.css";
import stockThumbnailImage from "./images/brainImage.jpg"

const getMonthName = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[date.getMonth()];
}

const AuthorImage = ({ authorImage }) => {
return (
    <img
      src={authorImage || stockAuthorImage}
      alt=""
      style={{ height: "20px", width: "20px", marginRight: "5px" }}
    />
  );
};

export const SubtitleBox = ({ title }) => {
  if (typeof title !== "undefined") {
    return (
        <SubtitleContainer>
            <VerticalDivider />
            <Subtitle>{title}</Subtitle>
        </SubtitleContainer>
    )
  }
  return null;
}

const ArticleHeader = ({
  title,
  articleType,
  authorName,
  authorImage,
  publishDate,
  imageThumbnail,
  thumbnailSubtitle,
}) => {
  let date = publishDate.split("/");
  let month = getMonthName(new Date(publishDate));
  const fullDate = `${month} ${date[1]}, ${date[2]}`;
  return (
    <HeaderContainer>
      <ShortDivider />
      <Title>{title}</Title>
      <Tag>{articleType}</Tag>
      <AuthorContainer>
        <AuthorImage authorImage={authorImage} />
        <p>{authorName}</p>
        <p>&nbsp;|&nbsp;</p>
        <p>{fullDate}</p>
      </AuthorContainer>
      <img src={imageThumbnail || stockThumbnailImage} />
      <SubtitleBox title={thumbnailSubtitle} />
    </HeaderContainer>
  );
};

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState("");
  const [component, setComponent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFullArticle(id)
      .then(({ data }) => {
        if (data["specialArticle"]) {
          setComponent(renderer(data["specialArticle"]));
        } else {
          setArticle(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box
        sx={{
          boxShadow: 20,
          bgcolor: (theme) => theme.palette.mode === "#D3D3D3",
          color: (theme) => theme.palette.mode === "#D3D3D3",
          padding: 6.2,
          borderRadius: 2,
          fontSize: "1.2vw",
          backgroundColor: "#f5f5f5",
          width: "100%",
          minHeight: 500,
          verticalAlign: "center",
        }}
      >
        {loading ? (
          <LinearProgress />
        ) : component ? (
          <Fragment>
            {component}
          </Fragment>
        ) : (
          <div className="fullArticlePage">
            <ArticleHeader
              title={article["title"]}
              articleType={article["articleType"] || "Untagged"}
              authorName={article["authorName"]}
              authorImage={article["authorImage"]}
              publishDate={article["publishDate"]}
              imageThumbnail={article["imageThumbnail"]}
              thumbnailSubtitle={article["thumbnailSubtitle"]}
            />
            <div
              dangerouslySetInnerHTML={{ __html: article["articleContent"] }}
            />
          </div>
        )}
      </Box>
    </div>
  );
}

export default ArticlePage;
