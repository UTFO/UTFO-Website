import './styles/ThumbPostHorizontal.css';
import { Link } from "react-router-dom";

const ThumbPostFour = ( { post } ) => {
    return (

        <div className="articleThumbHorizContainer">
            <Link className='articleThumbHorizLinkBox' to={`/articles/${post._id}`} target="_blank" rel="noreferrer">
                    <div>
                        <img className="articleThumbHorizImage" src={post.imageThumbnail} alt=""/>
                    </div>
                    <div className="articleThumbHorizAuthorContainer">
                        <p className="articleThumbHorizType">{post.articleType}</p>
                        <p className="articleThumbHorizTitle">{post.title}</p>
                        <div className="articleThumbHorizAuthorImageNameContainer">
                            <img className="articleThumbHorizAuthorImage" src={post.authorImage} alt=""/>
                            <p className="articleThumbHorizAuthor">{post.authorName}</p>
                        </div>
                    </div>
            </Link>

            </div>

    )
}

ThumbPostFour.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostFour