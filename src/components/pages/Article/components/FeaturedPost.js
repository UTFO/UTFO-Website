import { Link } from "react-router-dom";

const FeaturedPost = ({ post }) => {

    // console.log(post)

    return (
        <div className="articleFeaturedPostContainer">
            <img className="articleFeaturedPostImage" src={post.imageThumbnail} alt=""/>
            <div className="articleFeaturedPostTextContainer">
                <p className="articleFeaturedPostTitle">{post.title}</p>
                <p className="articleFeaturedPostText">{post.articleBlurb}</p>
                <Link
                    to={`/articles/${post._id}`}
                    target="_blank">
                    <p className="readMore">CLICK TO READ MORE</p>
                </Link>
                {/* <form action={post.link} target="_blank" rel="noreferrer">
                <input type="submit" className="articleFeaturedPostButton" value="Read More"/>
                </form> */}
      </div>
    </div>
  );
};

export default FeaturedPost;
