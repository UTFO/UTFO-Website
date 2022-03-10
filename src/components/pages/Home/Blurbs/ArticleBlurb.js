import "./ArticleBlurb.css";
import ThumbPost from "./ArticleBlurbComponents/ThumbPost.js";
import imageOne from "./ArticleBlurbComponents/images/recommendedArticleImage1.jpg";
import imageTwo from "./ArticleBlurbComponents/images/recommendedArticleImage2.jpg";
import imageThree from "./ArticleBlurbComponents/images/recommendedArticleImage3.jpg";
import { featuredPostsInfo } from "../../Article/FeaturedPostsInfo.js";

//Check mans' drawings here!... https://void0.fanbox.cc/ (I was forced to pls--)

function ArticleBlurb() {
  return (
    <>
      <h2>Recommended Articles</h2>
      <p>
        Check out some articles you might like to read to learn more about the
        club!
      </p>
      <div className="homeArticleBlurbPostContainer">
        {featuredPostsInfo.map((post) => {
          return (
            <ThumbPost
              image={post.image}
              title={post.title}
              link={post.link}
              description={post.text}
            />
          );
        })}
      </div>
    </>
  );
}

export default ArticleBlurb;
