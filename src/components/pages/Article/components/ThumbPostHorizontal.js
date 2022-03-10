import "./styles/ThumbPostHorizontal.css";

const ThumbPostFour = ({ post }) => {
  return (
    <div className="articleThumbHorizContainer">
      <a className="articleThumbHorizLinkBox" href={post.link}>
        <div>
          <img className="articleThumbHorizImage" src={post.image} alt="" />
        </div>
        <div className="articleThumbHorizAuthorContainer">
          <p className="articleThumbHorizType">{post.type}</p>
          <p className="articleThumbHorizTitle">{post.title}</p>
          <div className="articleThumbHorizAuthorImageNameContainer">
            <img
              className="articleThumbHorizAuthorImage"
              src={post.authorImage}
              alt=""
            />
            <p className="articleThumbHorizAuthor">{post.author}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

ThumbPostFour.defaultProps = {
  category: "Neutral",
};

export default ThumbPostFour;
