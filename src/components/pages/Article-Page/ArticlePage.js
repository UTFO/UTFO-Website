import { useEffect, useState, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { getFullArticle } from "../api";
import { renderer } from "./specialArticles/specialArticleData";
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
import stockThumbnailImage from "./images/stockThumbnailImage.jpeg";

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
    );
  }
  return null;
};

const ArticleHeader = ({
  title,
  articleType,
  authorName,
  authorImage,
  publishDate,
  imageThumbnail,
  thumbnailCaption,
}) => {
  let date = publishDate.split("/");
  let month = getMonthName(new Date(publishDate));
  const fullDate = `${month} ${date[1]}, ${date[2]}`;
  return (
    <HeaderContainer>
      <ShortDivider />
      <Title>{title}</Title>
      <div>
      {articleType.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
      </div>
      <AuthorContainer>
        <AuthorImage authorImage={authorImage} />
        <p>{authorName}</p>
        <p>&nbsp;|&nbsp;</p>
        <p>{fullDate}</p>
      </AuthorContainer>
      <img className="thumbnail" src={imageThumbnail || stockThumbnailImage} />
      <SubtitleBox title={thumbnailCaption} />
    </HeaderContainer>
  );
};

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
        navigate("/articles");
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
            <div style={{ padding: "0 15vw" }}>
              <ShortDivider />
            </div>
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
              thumbnailCaption={article["thumbnailCaption"]}
            />
            <div
              style={{ marginTop: "4em" }}
              dangerouslySetInnerHTML={{ __html: article["articleContent"] }}
            />
          </div>
        )}
      </Box>
    </div>
  );
}

export default ArticlePage;
