import { Link } from "react-router-dom";
const ThumbPost = ({ image, title, link, blurb }) => {
    return (
            <div className="homeArticleBlurbPost">
            <Link className="homeArticleBlurbPostLink" to={link} target="_blank" >
                    <img src={image} alt=""/>
                    <div className="homeArticleBlurbPostTextContainer">
                        <h2>{title}</h2>
                        <p>{blurb}</p>
                    </div>
            </Link>
            </div>
    )
}

export default ThumbPost
