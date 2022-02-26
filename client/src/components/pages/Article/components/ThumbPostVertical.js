import './styles/ThumbPostVert.css';

const ThumbPostThree = ( { post } ) => {

    return (

            <div className="articleThumbVertContainer">
                    <div>
                        <img className="articleThumbVertImage" src={post.imageThumbnail} alt=""/>
                        <div>
                            {/* replace with actual article type later */}
                            <p className="type">{post.articleType}</p> 
                            <p className="articleThumbVertTitle">{post.title}</p>
                        </div>
                    </div>
                <div className="articleThumbVertAuthorContainer">
                    <div className="articleThumbVertAuthorImageContainer">
                        <img className="articleThumbVertAuthorImage" src={post.authorImage} alt=""/>
                    </div>
                    <div className="articleThumbVertAuthorDateContainer">
                        <p className="articleThumbVertAuthor">{post.authorName}</p>
                        <p className="articleThumbVertAuthor"> | </p>
                        <p className="articleThumbVertDate">{post.publishDate}</p>
                    </div>
                </div>
            </div>

    )
}

ThumbPostThree.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostThree
